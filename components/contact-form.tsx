"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export function ContactForm() {
    const [submitted, setSubmitted] = useState(false);

    return (
        <motion.div variants={fadeInUp}>
            <Card>
                <CardContent className="pt-6">
                    <form
                        className="space-y-6"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            setSubmitted(false);

                            const formData = new FormData(e.currentTarget);
                            const data = {
                                name: formData.get('name'),
                                email: formData.get('email'),
                                phone: formData.get('phone'),
                                subject: formData.get('subject'),
                                service: formData.get('service'),
                                message: formData.get('message'),
                            };

                            const submitBtn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
                            const originalText = submitBtn.innerText;
                            submitBtn.disabled = true;
                            submitBtn.innerText = 'Wird gesendet...';

                            try {
                                const response = await fetch('/api/contact', {
                                    method: 'POST',
                                    headers: {
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(data),
                                });

                                if (response.ok) {
                                    setSubmitted(true);
                                    (e.target as HTMLFormElement).reset();
                                } else {
                                    alert('Etwas ist schief gelaufen. Bitte versuchen Sie es erneut.');
                                }
                            } catch (error) {
                                alert('Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.');
                            } finally {
                                submitBtn.disabled = false;
                                submitBtn.innerText = originalText;
                            }
                        }}
                    >
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <Label htmlFor="name" className="text-zinc-900">
                                    Vollständiger Name <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Geben Sie Ihren vollständigen Namen ein"
                                    className="mt-2"
                                />
                                <p className="mt-1 text-xs text-zinc-600">
                                    Bitte geben Sie Ihren vollständigen gesetzlichen Namen an
                                </p>
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-zinc-900">
                                    E-Mail-Adresse <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="ihre.email@beispiel.de"
                                    className="mt-2"
                                />
                                <p className="mt-1 text-xs text-zinc-600">
                                    Wir nutzen diese E-Mail, um Ihre Anfrage zu beantworten
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <Label htmlFor="phone" className="text-zinc-900">
                                    Telefonnummer (Optional)
                                </Label>
                                <Input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    placeholder="+49 (0) 123 456789"
                                    className="mt-2"
                                />
                                <p className="mt-1 text-xs text-zinc-600">
                                    Inklusive Ländervorwahl für internationale Nummern
                                </p>
                            </div>
                            <div>
                                <Label htmlFor="subject" className="text-zinc-900">
                                    Betreff <span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="Worum geht es bei Ihrer Anfrage?"
                                    className="mt-2"
                                />
                                <p className="mt-1 text-xs text-zinc-600">
                                    Kurze Beschreibung Ihres Anliegens
                                </p>
                            </div>
                        </div>

                        <div>
                            <Label htmlFor="service" className="text-zinc-900">
                                Interessierter Service (Optional)
                            </Label>
                            <Input
                                id="service"
                                name="service"
                                placeholder="z.B. Reisepass, Führerschein, Personalausweis, Aufenthaltstitel"
                                className="mt-2"
                            />
                            <p className="mt-1 text-xs text-zinc-600">
                                Helfen Sie uns, Ihre Anfrage dem richtigen Spezialisten zuzuweisen
                            </p>
                        </div>

                        <div>
                            <Label htmlFor="message" className="text-zinc-900">
                                Ihre Nachricht <span className="text-red-500">*</span>
                            </Label>
                            <Textarea
                                id="message"
                                name="message"
                                required
                                placeholder="Bitte geben Sie Details zu Ihrer Anfrage, Fragen oder wie wir Ihnen helfen können. Seien Sie so genau wie möglich, damit wir Ihnen die hilfreichste Antwort geben können."
                                className="mt-2 min-h-[150px]"
                            />
                            <p className="mt-1 text-xs text-zinc-600">
                                Je mehr Details Sie angeben, desto besser können wir Ihnen helfen
                            </p>
                        </div>

                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="privacy"
                                name="privacy"
                                required
                                className="mt-1"
                            />
                            <Label htmlFor="privacy" className="text-sm text-zinc-800">
                                Ich stimme der Datenschutzerklärung zu und verstehe, dass meine Informationen vertraulich behandelt und ausschließlich zur Beantwortung meiner Anfrage verwendet werden. <span className="text-red-500">*</span>
                            </Label>
                        </div>

                        <Button type="submit" size="lg" className="w-full md:w-auto">
                            Nachricht senden
                        </Button>

                        {submitted && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 rounded-lg bg-blue-50"
                            >
                                <p className="text-sm font-semibold text-blue-900">
                                    ✓ Nachricht erfolgreich gesendet!
                                </p>
                                <p className="text-sm text-blue-800">
                                    Vielen Dank für Ihre Kontaktaufnahme. Wir haben Ihre Nachricht erhalten und werden innerhalb von
                                    24–48 Stunden antworten. Für dringende Angelegenheiten rufen Sie bitte an oder nutzen Sie WhatsApp für sofortige Unterstützung.
                                </p>
                            </motion.div>
                        )}
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    );
}
