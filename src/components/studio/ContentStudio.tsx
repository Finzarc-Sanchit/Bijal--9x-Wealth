"use client";

import { useCallback, useEffect, useState } from "react";
import type { SiteContent } from "@/lib/content/schema";
import { Upload, RefreshCw, FileJson, ExternalLink } from "lucide-react";

type Tab = "form" | "json" | "file";

export function ContentStudio() {
  const [content, setContent] = useState<SiteContent | null>(null);
  const [jsonText, setJsonText] = useState("");
  const [tab, setTab] = useState<Tab>("form");
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [saving, setSaving] = useState(false);

  const loadContent = useCallback(async () => {
    const res = await fetch("/api/content");
    const json = await res.json();
    setContent(json.data);
    setJsonText(JSON.stringify(json.data, null, 2));
  }, []);

  useEffect(() => {
    loadContent();
  }, [loadContent]);

  async function saveContent(payload: unknown) {
    setSaving(true);
    setStatus(null);
    try {
      const res = await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Save failed");
      setContent(json.data);
      setJsonText(JSON.stringify(json.data, null, 2));
      setStatus({
        type: "success",
        message: "Saved! Open the website to preview your changes.",
      });
    } catch (e) {
      setStatus({
        type: "error",
        message: e instanceof Error ? e.message : "Save failed",
      });
    } finally {
      setSaving(false);
    }
  }

  function handleJsonSave() {
    try {
      saveContent(JSON.parse(jsonText));
    } catch {
      setStatus({ type: "error", message: "Invalid JSON format" });
    }
  }

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result as string);
        saveContent(parsed);
      } catch {
        setStatus({ type: "error", message: "Uploaded file is not valid JSON" });
      }
    };
    reader.readAsText(file);
  }

  if (!content) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-brand-cream">
        <p className="text-brand-muted">Loading content…</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      <header className="border-b border-brand-navy/10 bg-white px-6 py-4">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-semibold text-brand-navy">Content Studio</h1>
            <p className="text-sm text-brand-muted">
              Upload or edit content — changes appear on the live website
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-4 py-2 text-sm text-white"
            >
              <ExternalLink className="h-4 w-4" />
              View Website
            </a>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-6 py-8">
        {status && (
          <div
            className={`mb-6 rounded-xl px-4 py-3 text-sm ${
              status.type === "success"
                ? "bg-green-50 text-green-800"
                : "bg-red-50 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <div className="mb-6 flex gap-2">
          {(
            [
              { id: "form", label: "Quick Edit", icon: RefreshCw },
              { id: "json", label: "JSON Editor", icon: FileJson },
              { id: "file", label: "Upload File", icon: Upload },
            ] as const
          ).map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              onClick={() => setTab(id)}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm ${
                tab === id
                  ? "bg-brand-navy text-white"
                  : "bg-white text-brand-navy ring-1 ring-brand-navy/10"
              }`}
            >
              <Icon className="h-4 w-4" />
              {label}
            </button>
          ))}
        </div>

        {tab === "form" && (
          <div className="space-y-6 rounded-2xl bg-white p-6 shadow-sm">
            <FormField
              label="Site Name"
              value={content.site.name}
              onChange={(v) => setContent({ ...content, site: { ...content.site, name: v } })}
            />
            <FormField
              label="Tagline"
              value={content.site.tagline}
              onChange={(v) => setContent({ ...content, site: { ...content.site, tagline: v } })}
            />
            <FormField
              label="Hero Headline"
              value={content.hero.headline}
              onChange={(v) => setContent({ ...content, hero: { ...content.hero, headline: v } })}
            />
            <FormField
              label="Hero Subheadline"
              value={content.hero.subheadline}
              multiline
              onChange={(v) =>
                setContent({ ...content, hero: { ...content.hero, subheadline: v } })
              }
            />
            <FormField
              label="About Bio"
              value={content.about.bio}
              multiline
              onChange={(v) => setContent({ ...content, about: { ...content.about, bio: v } })}
            />
            <FormField
              label="Phone"
              value={content.contact.phone}
              onChange={(v) =>
                setContent({
                  ...content,
                  contact: {
                    ...content.contact,
                    phone: v,
                    phoneHref: `tel:${v.replace(/\s/g, "")}`,
                  },
                })
              }
            />
            <FormField
              label="Email"
              value={content.contact.email}
              onChange={(v) =>
                setContent({ ...content, contact: { ...content.contact, email: v } })
              }
            />
            <button
              type="button"
              disabled={saving}
              onClick={() => saveContent(content)}
              className="rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save & Update All 3 Templates"}
            </button>
          </div>
        )}

        {tab === "json" && (
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="mb-4 text-sm text-brand-muted">
              Paste full JSON content. Partial JSON merges with defaults.
            </p>
            <textarea
              value={jsonText}
              onChange={(e) => setJsonText(e.target.value)}
              className="h-96 w-full rounded-xl border border-brand-navy/10 p-4 font-mono text-sm"
            />
            <button
              type="button"
              disabled={saving}
              onClick={handleJsonSave}
              className="mt-4 rounded-full bg-brand-gold px-6 py-3 text-sm font-semibold text-brand-navy disabled:opacity-50"
            >
              {saving ? "Saving…" : "Save JSON to All Templates"}
            </button>
          </div>
        )}

        {tab === "file" && (
          <div className="rounded-2xl border-2 border-dashed border-brand-navy/20 bg-white p-12 text-center">
            <Upload className="mx-auto mb-4 h-10 w-10 text-brand-gold" />
            <p className="mb-4 text-brand-navy font-medium">Upload site-content.json</p>
            <p className="mb-6 text-sm text-brand-muted">
              Drop a JSON file with your business info — it populates Classic, Modern, and Bold
              instantly.
            </p>
            <label className="cursor-pointer rounded-full bg-brand-navy px-6 py-3 text-sm text-white">
              Choose JSON File
              <input
                type="file"
                accept=".json,application/json"
                className="hidden"
                onChange={handleFileUpload}
              />
            </label>
            <p className="mt-6">
              <a href="/api/content" className="text-sm text-brand-teal underline">
                Download current content JSON
              </a>
            </p>
          </div>
        )}

        {content.updatedAt && (
          <p className="mt-4 text-xs text-brand-muted">
            Last updated: {new Date(content.updatedAt).toLocaleString()}
          </p>
        )}
      </div>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  multiline,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-medium text-brand-navy">{label}</span>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          rows={4}
          className="w-full rounded-xl border border-brand-navy/10 px-4 py-2 text-sm"
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full rounded-xl border border-brand-navy/10 px-4 py-2 text-sm"
        />
      )}
    </label>
  );
}
