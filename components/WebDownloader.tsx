'use client';

import { useMemo, useState } from 'react';
import { ArrowDownToLine, Check, Clipboard, Clock3, Download, Film, Link2, LoaderCircle, Music2, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';

type Format = { id: string; ext: string; label: string; size: number | null; width: number | null; height: number | null };
type Media = { title: string; uploader: string; duration: number | null; thumbnail: string | null; source: string; url: string };
type Result = { media: Media; formats: Format[] };

function time(value: number | null) {
  if (!value) return null;
  const hours = Math.floor(value / 3600);
  const minutes = Math.floor((value % 3600) / 60);
  const seconds = Math.floor(value % 60);
  return hours ? `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}` : `${minutes}:${String(seconds).padStart(2, '0')}`;
}

function size(value: number | null) {
  if (!value) return 'Size varies';
  const mb = value / 1024 / 1024;
  return mb >= 1000 ? `${(mb / 1024).toFixed(1)} GB` : `${mb.toFixed(mb >= 10 ? 0 : 1)} MB`;
}

export default function WebDownloader() {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState<Result | null>(null);
  const [selected, setSelected] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const selectedFormat = useMemo(() => result?.formats.find((format) => format.id === selected), [result, selected]);

  async function analyze(event: React.FormEvent) {
    event.preventDefault();
    if (!url.trim()) { setError('Paste a video link to continue.'); return; }
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const response = await fetch('/api/info', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: url.trim() }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Could not read this link.');
      setResult(data);
      setSelected(data.formats[0]?.id || '');
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  async function paste() {
    try {
      const text = await navigator.clipboard.readText();
      if (text) { setUrl(text); setError(''); }
    } catch {
      setError('Clipboard access was blocked. Paste the link manually.');
    }
  }

  function download() {
    if (!result || !selectedFormat) return;
    const params = new URLSearchParams({ url: result.media.url, format: selectedFormat.id, ext: selectedFormat.ext });
    window.location.assign(`/api/download?${params.toString()}`);
  }

  return (
    <>
      <section className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-hero-glow" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_0%,black,transparent)]" />
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-12 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[130px]" />

        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-400/[0.07] px-3.5 py-1.5 text-xs font-semibold text-violet-200">
              <Sparkles className="h-3.5 w-3.5" /> Final Vora for Web
            </div>
            <h1 className="animate-fade-up mt-6 font-display text-4xl font-semibold leading-[1.06] tracking-tight text-white [animation-delay:60ms] sm:text-6xl lg:text-7xl">
              Your favorite videos,<br /><span className="gradient-text">one link away.</span>
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-400 [animation-delay:120ms] sm:text-lg">
              Paste a public video link, choose the quality, and save it directly. No account, no confusing steps, no tracking.
            </p>
          </div>

          <div id="download" className="animate-fade-up relative mx-auto mt-10 max-w-4xl [animation-delay:180ms]">
            <div aria-hidden="true" className="absolute -inset-1 -z-10 rounded-[1.8rem] bg-gradient-to-r from-violet-600/30 via-indigo-500/10 to-sky-500/25 blur-xl" />
            <form onSubmit={analyze} className="rounded-[1.6rem] border border-white/10 bg-ink-850/90 p-2.5 shadow-2xl backdrop-blur-xl sm:p-3">
              <div className="flex flex-col gap-2 sm:flex-row">
                <div className="relative min-w-0 flex-1">
                  <Link2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                  <input
                    value={url}
                    onChange={(event) => { setUrl(event.target.value); setError(''); }}
                    placeholder="Paste a video link here..."
                    aria-label="Video link"
                    className="h-14 w-full rounded-xl border border-white/[0.07] bg-ink-950/70 pl-12 pr-20 text-[15px] text-white outline-none transition placeholder:text-slate-600 focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10"
                  />
                  <button type="button" onClick={paste} className="absolute right-2 top-1/2 inline-flex -translate-y-1/2 items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold text-slate-400 transition hover:bg-white/[0.06] hover:text-white">
                    <Clipboard className="h-3.5 w-3.5" /> Paste
                  </button>
                </div>
                <button disabled={loading} className="btn-primary h-14 shrink-0 px-7 text-[15px] disabled:cursor-wait disabled:opacity-70">
                  {loading ? <><LoaderCircle className="h-5 w-5 animate-spin" /> Reading link</> : <><ArrowDownToLine className="h-5 w-5" /> Find video</>}
                </button>
              </div>
            </form>
            {error && <div role="alert" className="mt-3 rounded-xl border border-rose-400/20 bg-rose-400/[0.07] px-4 py-3 text-sm text-rose-200">{error}</div>}
          </div>

          {!result && !loading && (
            <div className="mt-7 flex flex-wrap items-center justify-center gap-x-7 gap-y-3 text-xs font-medium text-slate-500">
              <span className="inline-flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-400" /> Public links</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-3.5 w-3.5 text-emerald-400" /> No account required</span>
              <span className="inline-flex items-center gap-2"><Film className="h-3.5 w-3.5 text-emerald-400" /> Multiple qualities</span>
            </div>
          )}

          {result && (
            <div className="mx-auto mt-7 max-w-4xl overflow-hidden rounded-3xl border border-white/[0.08] bg-ink-850/90 shadow-card">
              <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
                <div className="relative min-h-56 overflow-hidden bg-ink-800 md:min-h-full">
                  {result.media.thumbnail ? <img src={result.media.thumbnail} alt="Video thumbnail" className="absolute inset-0 h-full w-full object-cover" /> : <div className="absolute inset-0 flex items-center justify-center"><Film className="h-12 w-12 text-slate-600" /></div>}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                  {result.media.duration && <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-md bg-black/75 px-2 py-1 text-xs font-semibold text-white"><Clock3 className="h-3 w-3" />{time(result.media.duration)}</span>}
                </div>
                <div className="p-5 sm:p-7">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-violet-300"><span className="h-1.5 w-1.5 rounded-full bg-violet-400" />{result.media.source}</div>
                  <h2 className="mt-3 line-clamp-2 font-display text-xl font-semibold leading-snug text-white">{result.media.title}</h2>
                  <p className="mt-1.5 truncate text-sm text-slate-500">{result.media.uploader}</p>

                  <label className="mt-6 block text-xs font-semibold uppercase tracking-[0.14em] text-slate-500" htmlFor="quality">Download quality</label>
                  <div className="relative mt-2">
                    <select id="quality" value={selected} onChange={(event) => setSelected(event.target.value)} className="h-12 w-full appearance-none rounded-xl border border-white/10 bg-ink-950 px-4 pr-10 text-sm font-medium text-white outline-none focus:border-violet-400/50 focus:ring-4 focus:ring-violet-500/10">
                      {result.formats.map((format) => <option key={format.id} value={format.id}>{format.label} · {format.ext.toUpperCase()} · {size(format.size)}</option>)}
                    </select>
                    {selectedFormat?.height ? <Film className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" /> : <Music2 className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />}
                  </div>
                  <button onClick={download} className="btn-primary mt-3 h-12 w-full text-sm"><Download className="h-4.5 w-4.5" /> Download {selectedFormat?.ext.toUpperCase()}</button>
                  <button onClick={() => { setResult(null); setUrl(''); setSelected(''); }} className="mx-auto mt-4 flex items-center gap-1.5 text-xs font-medium text-slate-500 transition hover:text-slate-300"><RotateCcw className="h-3.5 w-3.5" /> Try another link</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section id="how-it-works" className="border-y border-white/[0.05] bg-white/[0.015] py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="text-center"><p className="eyebrow">Simple by design</p><h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">From link to file in three steps</h2></div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Copy a link', 'Open a public video and copy its share link from your browser or app.'],
              ['02', 'Choose quality', 'Final Vora finds available video and audio formats for you.'],
              ['03', 'Save your file', 'Pick a format and download it directly through your browser.'],
            ].map(([number, title, copy]) => <div key={number} className="card p-6"><span className="font-display text-sm font-semibold text-violet-300">{number}</span><h3 className="mt-8 font-display text-lg font-semibold text-white">{title}</h3><p className="mt-2 text-sm leading-relaxed text-slate-500">{copy}</p></div>)}
          </div>
        </div>
      </section>

      <section id="privacy" className="py-20 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 sm:px-8 md:grid-cols-2">
          <div><p className="eyebrow"><ShieldCheck className="h-3.5 w-3.5" /> Privacy first</p><h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">No profile. No history. No noise.</h2><p className="mt-5 max-w-lg leading-relaxed text-slate-400">Final Vora does not require an account. Links are processed only to retrieve the file you request and are not stored by the application.</p></div>
          <div className="grid grid-cols-2 gap-3">{['No sign-up', 'No saved history', 'No ad trackers', 'Open deployment'].map((item) => <div key={item} className="card flex items-center gap-3 p-4 text-sm font-medium text-slate-200"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-400/10"><Check className="h-4 w-4 text-emerald-300" /></span>{item}</div>)}</div>
        </div>
      </section>
    </>
  );
}
