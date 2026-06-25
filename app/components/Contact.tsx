"use client";

import { useState } from "react";
import { useLang } from "../context/LangContext";
import { GITHUB_URL } from "../constants/profile";
import SectionWrapper from "./ui/SectionWrapper";
import Button from "./ui/Button";
import { GitHub } from "./ui/Icons";

const COPYRIGHT = "© 2025 Rui";

const content = {
  ja: {
    desc: "お仕事のご依頼・ご相談はこちらからお気軽にどうぞ。",
    name: "お名前",
    email: "メールアドレス",
    message: "お問い合わせ内容",
    send: "送信する",
    sent: "送信しました。ありがとうございます！",
  },
  en: {
    desc: "Feel free to reach out for work inquiries or consultations.",
    name: "Your Name",
    email: "Email Address",
    message: "Message",
    send: "Send",
    sent: "Thank you! Your message has been sent.",
  },
};

export default function Contact() {
  const { lang } = useLang();
  const t = content[lang];

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("https://formspree.io/f/mgoqbylo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) setSent(true);
  }

  return (
    <SectionWrapper id="contact" label="CONTACT" title="Contact">
      <p className="text-primary/50 -mt-8 mb-12">{t.desc}</p>

      {sent ? (
        <div className="text-center py-16">
          <p className="text-primary/60">{t.sent}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
          {[
            { id: "name", label: "NAME", type: "text", placeholder: t.name },
            { id: "email", label: "EMAIL", type: "email", placeholder: t.email },
          ].map(({ id, label, type, placeholder }) => (
            <div key={id}>
              <label className="label block mb-2">{label}</label>
              <input
                type={type}
                name={id}
                required
                value={formData[id as keyof typeof formData]}
                onChange={handleChange}
                className="w-full border-b border-primary/20 py-2 text-primary/80 bg-transparent outline-none focus:border-accent transition-colors"
                placeholder={placeholder}
              />
            </div>
          ))}
          <div>
            <label className="label block mb-2">MESSAGE</label>
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full border-b border-primary/20 py-2 text-primary/80 bg-transparent outline-none focus:border-accent transition-colors resize-none"
              placeholder={t.message}
            />
          </div>
          <Button type="submit">{t.send}</Button>
        </form>
      )}

    </SectionWrapper>
  );
}
