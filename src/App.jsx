import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { Grid, Box } from "@mui/material";
import Header from "./components/Header";

// Const
let fetchedData = [
  {
    slug: "remote-engineering-manager-ledgy-389851",
    company_name: "Ledgy",
    title: "Engineering Manager",
    description:
      "<p>Ledgy’s mission is to democratize ownership in startups. We create transparency for all stakeholders of a company and bring scalability to important processes for founders such as managing their stockholders, preparing financing rounds, and granting equity to all their employees.</p>\n<p>Our customers are successful European companies, like Wefox, Bitpanda, Gorillas, Trade Republic, and many more.</p>\n<p>Since our incorporation in 2017, we’ve been listed every year among the TOP 100 Swiss startups and are ranked as the #1 ICT startup in Switzerland.</p>\n<p>Ledgy’s $10m Series A round in September ’21 marked the entry of renowned Silicon Valley investor <strong>Sequoia Capital</strong> into the Swiss startup ecosystem—almost 50 years after its founding.</p>\n<p>Our goal at Ledgy is to use this freshly acquired confidence (and capital) to build one of the greatest teams in Europe and boldly go to where no company has gone before 👩🏻‍🚀🚀</p>\n<p>We are an international and diverse team of 30 people, 50% women, coming from 19 different countries and speaking 18 different languages.</p>\n<p>We believe that startups are a main driver of positive change in the world and help create equal opportunities for everyone outside of corporate hierarchies. Humanity needs solutions for the current challenges, like climate change and the best source for this innovation are startups. We try to live by strong moral values and offer an example to other companies, while helping them be more successful with our product so they can drive the change forward.</p>\n<p>We believe that equal opportunities for all social groups of society are necessary, and are committed to a culture where everyone feels welcome and respected. Psychological safety and a culture of modesty and openness is important to us.</p>\n<p>We sincerely live and work by our beliefs so every hire for us is an important one. We’ve done a great job so far in building our team and our hope is that you will be able to join us.</p>\n<p>As an <strong>Engineering Manager</strong> at Ledgy, you will learn and expand on your engineering knowledge and experiences to build a world-class team of diverse engineers that solves the difficult problems of our customers—making it as easy as possible for them to harness the power of equity.</p>\n<p><strong>At Ledgy, you will</strong></p>\n<ul>\n<li>Manage performance and growth of a team of hungry engineers with diverse backgrounds</li>\n<li>Establish development practices to improve software quality and pace of development</li>\n<li>Collaborate extensively with other engineers to build tools and systems that support our services and allow engineers to deliver high quality software.</li>\n<li>Build plans for prioritizing technical and resourcing challenges in the engineering organization</li>\n<li>Ensure team success by leading our onboarding and performance management processes</li>\n<li>Maintain status, identify and resolve roadblocks, and communicate status both inside and outside your teams</li>\n<li>Provide technical mentorship to our team as we balance between building sustainable, high-impact projects and shipping them quickly</li>\n</ul>\n<p><strong>The job is a good fit if you</strong></p>\n<ul>\n<li>Enjoy mentoring and helping engineers grow to achieve their career goals</li>\n<li>Love finding the optimal solution given the resource constraints while keeping a reasonable balance between under- and over-engineering</li>\n<li>Get excited by developing project plans to align your team’s work with the company's product strategy and plans</li>\n<li>Are passionate and confident in leading and taking pride and ownership in the work you and your team do</li>\n<li>Have a strong interest to hire, mentor, and develop career plans for engineers of all levels</li>\n<li>Dream about aligning the whole team on meaningful development standards and coding practices</li>\n</ul>\n<p><strong>Being part of Ledgy means to</strong></p>\n<ul>\n<li>See “the whole journey” and be one of the first team members of a company that scales from Switzerland to be the major player in Europe and globally</li>\n<li>Work with a passionate team with diverse interests such as the outdoors ⛰️, meditation 🧘, and space exploration 🌌</li>\n<li>Have a chance to get to get to know the startup world and it’s leaders inside and out</li>\n<li>Have flexible working hours, be able to work remotely, and benefit from 25 days of vacation</li>\n<li>Get stock options to become an owner of Ledgy yourself</li>\n<li>Take part in company off-sites and in optional regular team activities</li>\n</ul>\n<p>…all this to create a fun 🎉 and productive 👩🏾‍💻 working environment where personal hobbies and projects have enough space as well.</p>\n",
    remote: true,
    url: "https://arbeitnow.com/view/remote-engineering-manager-ledgy-389851",
    tags: ["Remote", "Software / Web Development"],
    job_types: [],
    location: "Zürich",
    created_at: 1639929853,
  },
  {
    slug: "aussendienstmitarbeiterin-mwd-dr-belter-cosmetic-gmbh-173524",
    company_name: "Dr. Belter Cosmetic GmbH",
    title: "Außendienstmitarbeiterin (m/w/d)",
    description:
      "<p><strong>DR.BELTER® COSMETIC</strong> ist naturverbundene, naturwissenschaftlich fundierte Hautpflege aus ausgesuchten, dermatologisch sinnvollen Rohstoffen. Als Profimarke bietet Dr. Belter ein umfassendes, hochwertiges Pflege- und Behandlungskonzept für Gesichtspflege, Körperpflege und dekorative Kosmetik.</p>\n<p>Mit den Dr. Belter Präparaten können auch empfindlichste und problematischste Hauttypen erfolgreich behandelt werden. Die exklusiven Behandlungsmethoden verbinden Wirksamkeit und Wellness harmonisch miteinander.</p>\n<p>Zur Verstärkung unseres Teams suchen wir für die <strong>Regionen Berlin, Brandenburg, Sachsen-Anhalt, Sachsen und Thüringen</strong> zum nächstmöglichen Zeitpunkt eine</p>\n<p><strong>AUSSENDIENSTMITARBEITERIN (m/w/d)</strong></p>\n<h2>Aufgaben</h2>\n<ul>\n<li>Kundenbetreuung und professionelle Beratung der DR.BELTER Kosmetik- Kunden</li>\n<li>Sie können sich auf unterschiedliche Kundentypen einstellen und diese begeistern</li>\n<li>aktive Neukundenakquise</li>\n<li>Sie übernehmen Verantwortung in den Bereichen Marketing, Produktwissen und Verkauf in Ihrem Gebiet</li>\n<li>Teilnahme und Mitarbeit an Messen</li>\n<li>Durchführung von Promotion-Aktivitäten</li>\n</ul>\n<h2>Qualifikation</h2>\n<ul>\n<li>Sie verfügen über eine abgeschlossene Berufsausbildung als Kosmetikerin</li>\n<li>Sie haben Außendiensterfahrung in der Betreuung von Kosmetikinstituten, Kosmetikschulen und Hotels</li>\n<li>Sie zeichnen sich aus durch eine hohe Eigenmotivation, Kommunikationsbereitschaft und Verantwortungsbewusstsein</li>\n<li>Effektives und strukturiertes Arbeiten sind Sie gewohnt</li>\n<li>Sie haben ein gepflegtes, freundliches und überzeugendes Auftreten</li>\n<li>Sie besitzen eine ausgeprägte Flexibilität und hohe Reisebereitschaft</li>\n<li>Ihr Wohnort liegt idealerweise im angegebenen Betreuungsgebiet</li>\n</ul>\n<h2>Benefits</h2>\n<ul>\n<li>eine Produktpallette im zukunftsweisenden GreenTecConcept mit höchsten Qualitätskriterien</li>\n<li>eine abwechslungsreiche und spannende Tätigkeit</li>\n<li>ein festes Grundgehalt mit leistungsorientierten Provisionen</li>\n<li>eine intensive Einarbeitung</li>\n<li>eine familienfreundliche und kollegiale Unternehmenskultur</li>\n<li>ein Firmenwagen auch zur privaten Nutzung</li>\n<li>Laptop, Handy</li>\n</ul>\n<p>Wir legen großen Wert auf ein verantwortungsvolles, kollegiales und kooperatives Miteinander.</p>\n<p>Ihr Interesse ist geweckt ?</p>\n<p>Dann senden Sie bitte Ihre aussagekräftigen Onlinebewerbungsunterlagen (Lebenslauf, Arbeitszeugnis und Qualifikationsnachweis) an:</p>\n<p><strong>Dr. Belter Cosmetic</strong></p>\n<p><strong>Frau Antje Ringe</strong></p>\n<p><strong>Telefon: 01516 - 470 93 18</strong></p>\n",
    remote: false,
    url: "https://arbeitnow.com/view/aussendienstmitarbeiterin-mwd-dr-belter-cosmetic-gmbh-173524",
    tags: ["Sales"],
    job_types: ["Vollzeit (unbefristet)", "senior-position"],
    location: "Berlin",
    created_at: 1639929853,
  },
  {
    slug: "remote-verkaufsreprasentant-im-aussendienst-mwd-kmp-management-consulting-20977",
    company_name: "KMP MANAGEMENT CONSULTING",
    title: "Verkaufsrepräsentant im Aussendienst (m/w/d)",
    description:
      "<p><strong>Eine interessante abwechslungsreiche Herausforderung im Kulturbereich</strong></p>\n<p>Unser Kunde ist ein international renommierter Anbieter von kulturellen Events. Die Schweizer Landesgesellschaft bietet Vertriebslösungen für Veranstaltungen nahezu jeglicher Art an. Das Angebot gestaltet sich vollumfassend und äusserst abwechslungsreich. Hochmotivierte Mitarbeiter wickeln tagtäglich mehrere tausende Transferleistungen ab und bescheren somit den zahlreichen Kunden kulturell unvergessliche Momente. Seit vielen Jahren befindet sich die Unternehmung auf einem äusserst gesunden Expansionskurs und die Tätigkeitsfelder und Dienstleistungen werden stetig ausgeweitet.</p>\n<p>Um den zahlreichen Kunden in den einzelnen Regionen in der Betreuung auch in Zukunft gerecht werden zu können, suchen wir im Auftrag zum nächstmöglichen Zeitpunkt ein junges versiertes Verkaufstalent als Verkaufsrepräsentant im Aussendienst</p>\n<h2>Aufgaben</h2>\n<ul>\n<li>Betreuung von Bestandskunden und Akquisition von Neukunden</li>\n<li>Erarbeitung und Umsetzung von Produkten und Dienstleistungen rund um Event- und Ticketvertrieb</li>\n<li>Beratung bei Kunden für massgeschneiderte Lösungen im Eventbereich und in der Vermarktung von Tickets</li>\n<li>Kontinuierliche Beobachtung des Gesamtmarktes zur Ableitung von Trends und Entwicklungen für das Unternehmen</li>\n<li>Offertwesen, Angebotsdefinition, umfassende Kundenbetreuung von Anfang bis Ende</li>\n<li>Teilnahme an Kunden- und Branchenveranstaltungen und –events</li>\n<li>Organisation und Durchführung von eigenen Events und Veranstaltungen zur Kundengewinnung</li>\n<li>Stetige Erweiterung des Netzwerks und eigener Fähigkeiten</li>\n</ul>\n<h2>Qualifikation</h2>\n<ul>\n<li>Eine fundierte kaufmännisches Ausbildung sowie eine Weiterbildung im Verkauf</li>\n<li>Mindestens 3-4 Jahre Erfahrung im B2B-Vertrieb</li>\n<li>Starkes und weitreichendes Netzwerk in der Schweiz zu Unternehmen und Persönlichkeiten</li>\n<li>Kommunikativ, emotional intelligent, versiert im zwischenmenschlichen Umgang</li>\n<li>Persönlich fundiert, stabil, ausgeglichen, belastungsfähig</li>\n<li>Motivierend, begeisternd, innovativ, ideenreich, kundenorientiert, dienstleistungsbereit, abschlussorientiert</li>\n<li>Sehr gute Kenntnisse der deutschen Sprache in Wort und Schrift, weitere Sprachen (Englisch, Französisch und/ oder Italienisch) von Vorteil</li>\n<li>Gute IT-Kenntnisse (CRM, Office)</li>\n</ul>\n<h2>Benefits</h2>\n<ul>\n<li>Eine hochinteressante Aufgabe mit Entwicklungsmöglichkeiten in einem international geprägten Umfeld und Menschen, die sich gegenseitig wertschätzen und vertrauen</li>\n<li>Eine Unternehmenskultur, in der es Spass macht Ideen, Kraft und Initiative einzubringen</li>\n<li>Mitarbeit in einem engagierten Team, flache Hierarchien und kurze Kommunikationswege</li>\n<li>Bis zu zwei Tage Home-Office pro Woche möglich</li>\n<li>Gutes Fixgehalt und interessante Bonuskomponente, sehr gute Sozialleistungen</li>\n</ul>\n<p>Wenn Du Dich angesprochen fühlst, so möchten wir Dich gerne kennenlernen! Sende dem unten genannten Ansprechpartner bitte Deine vollständigen Bewerbungsunterlagen inkl. Foto einschliesslich der Angabe Deines frühestmöglichen Eintrittsterms sowie Deiner Salärvorstellungen unter der Referenz 21.143 - bevorzugt per E-Mail - zu oder ruf mich einfach an.Wir freuen uns auf Deine Kontaktaufnahme!</p>\n",
    remote: true,
    url: "https://arbeitnow.com/view/remote-verkaufsreprasentant-im-aussendienst-mwd-kmp-management-consulting-20977",
    tags: ["Remote", "Design / Art"],
    job_types: ["Vollzeit (unbefristet)"],
    location: "Zürich",
    created_at: 1639929853,
  },
  {
    slug: "aussendienstmitarbeiterin-mwd-dr-belter-cosmetic-gmbh-463648",
    company_name: "Dr. Belter Cosmetic GmbH",
    title: "Außendienstmitarbeiterin (m/w/d)",
    description:
      "<p><strong>DR.BELTER® COSMETIC</strong> ist naturverbundene, naturwissenschaftlich fundierte Hautpflege aus ausgesuchten, dermatologisch sinnvollen Rohstoffen. Als Profimarke bietet Dr. Belter ein umfassendes, hochwertiges Pflege- und Behandlungskonzept für Gesichtspflege, Körperpflege und dekorative Kosmetik.</p>\n<p>Mit den Dr. Belter Präparaten können auch empfindlichste und problematischste Hauttypen erfolgreich behandelt werden. Die exklusiven Behandlungsmethoden verbinden Wirksamkeit und Wellness harmonisch miteinander.</p>\n<p>Zur Verstärkung unseres Teams suchen wir für die <strong>Regionen Berlin, Brandenburg, Sachsen-Anhalt, Sachsen und Thüringen</strong> zum nächstmöglichen Zeitpunkt eine</p>\n<p><strong>AUSSENDIENSTMITARBEITERIN (m/w/d)</strong></p>\n<h2>Aufgaben</h2>\n<ul>\n<li>Kundenbetreuung und professionelle Beratung der DR.BELTER Kosmetik- Kunden</li>\n<li>Sie können sich auf unterschiedliche Kundentypen einstellen und diese begeistern</li>\n<li>aktive Neukundenakquise</li>\n<li>Sie übernehmen Verantwortung in den Bereichen Marketing, Produktwissen und Verkauf in Ihrem Gebiet</li>\n<li>Teilnahme und Mitarbeit an Messen</li>\n<li>Durchführung von Promotion-Aktivitäten</li>\n</ul>\n<h2>Qualifikation</h2>\n<ul>\n<li>Sie verfügen über eine abgeschlossene Berufsausbildung als Kosmetikerin</li>\n<li>Sie haben Außendiensterfahrung in der Betreuung von Kosmetikinstituten, Kosmetikschulen und Hotels</li>\n<li>Sie zeichnen sich aus durch eine hohe Eigenmotivation, Kommunikationsbereitschaft und Verantwortungsbewusstsein</li>\n<li>Effektives und strukturiertes Arbeiten sind Sie gewohnt</li>\n<li>Sie haben ein gepflegtes, freundliches und überzeugendes Auftreten</li>\n<li>Sie besitzen eine ausgeprägte Flexibilität und hohe Reisebereitschaft</li>\n<li>Ihr Wohnort liegt idealerweise im angegebenen Betreuungsgebiet</li>\n</ul>\n<h2>Benefits</h2>\n<ul>\n<li>eine Produktpallette im zukunftsweisenden GreenTecConcept mit höchsten Qualitätskriterien</li>\n<li>eine abwechslungsreiche und spannende Tätigkeit</li>\n<li>ein festes Grundgehalt mit leistungsorientierten Provisionen</li>\n<li>eine intensive Einarbeitung</li>\n<li>eine familienfreundliche und kollegiale Unternehmenskultur</li>\n<li>ein Firmenwagen auch zur privaten Nutzung</li>\n<li>Laptop, Handy</li>\n</ul>\n<p>Wir legen großen Wert auf ein verantwortungsvolles, kollegiales und kooperatives Miteinander.</p>\n<p>Ihr Interesse ist geweckt ?</p>\n<p>Dann senden Sie bitte Ihre aussagekräftigen Onlinebewerbungsunterlagen (Lebenslauf, Arbeitszeugnis und Qualifikationsnachweis) an:</p>\n<p><strong>Dr. Belter Cosmetic</strong></p>\n<p><strong>Frau Antje Ringe</strong></p>\n<p><strong>Telefon: 01516 - 470 93 18</strong></p>\n",
    remote: false,
    url: "https://arbeitnow.com/view/aussendienstmitarbeiterin-mwd-dr-belter-cosmetic-gmbh-463648",
    tags: ["Sales"],
    job_types: ["Vollzeit (unbefristet)", "senior-position"],
    location: "Leipzig",
    created_at: 1639929853,
  },
  {
    slug: "aussendienstmitarbeiterin-mwd-dr-belter-cosmetic-gmbh-191296",
    company_name: "Dr. Belter Cosmetic GmbH",
    title: "Außendienstmitarbeiterin (m/w/d)",
    description:
      "<p><strong>DR.BELTER® COSMETIC</strong> ist naturverbundene, naturwissenschaftlich fundierte Hautpflege aus ausgesuchten, dermatologisch sinnvollen Rohstoffen. Als Profimarke bietet Dr. Belter ein umfassendes, hochwertiges Pflege- und Behandlungskonzept für Gesichtspflege, Körperpflege und dekorative Kosmetik.</p>\n<p>Mit den Dr. Belter Präparaten können auch empfindlichste und problematischste Hauttypen erfolgreich behandelt werden. Die exklusiven Behandlungsmethoden verbinden Wirksamkeit und Wellness harmonisch miteinander.</p>\n<p>Zur Verstärkung unseres Teams suchen wir für die <strong>Regionen Berlin, Brandenburg, Sachsen-Anhalt, Sachsen und Thüringen</strong> zum nächstmöglichen Zeitpunkt eine</p>\n<p><strong>AUSSENDIENSTMITARBEITERIN (m/w/d)</strong></p>\n<h2>Aufgaben</h2>\n<ul>\n<li>Kundenbetreuung und professionelle Beratung der DR.BELTER Kosmetik- Kunden</li>\n<li>Sie können sich auf unterschiedliche Kundentypen einstellen und diese begeistern</li>\n<li>aktive Neukundenakquise</li>\n<li>Sie übernehmen Verantwortung in den Bereichen Marketing, Produktwissen und Verkauf in Ihrem Gebiet</li>\n<li>Teilnahme und Mitarbeit an Messen</li>\n<li>Durchführung von Promotion-Aktivitäten</li>\n</ul>\n<h2>Qualifikation</h2>\n<ul>\n<li>Sie verfügen über eine abgeschlossene Berufsausbildung als Kosmetikerin</li>\n<li>Sie haben Außendiensterfahrung in der Betreuung von Kosmetikinstituten, Kosmetikschulen und Hotels</li>\n<li>Sie zeichnen sich aus durch eine hohe Eigenmotivation, Kommunikationsbereitschaft und Verantwortungsbewusstsein</li>\n<li>Effektives und strukturiertes Arbeiten sind Sie gewohnt</li>\n<li>Sie haben ein gepflegtes, freundliches und überzeugendes Auftreten</li>\n<li>Sie besitzen eine ausgeprägte Flexibilität und hohe Reisebereitschaft</li>\n<li>Ihr Wohnort liegt idealerweise im angegebenen Betreuungsgebiet</li>\n</ul>\n<h2>Benefits</h2>\n<ul>\n<li>eine Produktpallette im zukunftsweisenden GreenTecConcept mit höchsten Qualitätskriterien</li>\n<li>eine abwechslungsreiche und spannende Tätigkeit</li>\n<li>ein festes Grundgehalt mit leistungsorientierten Provisionen</li>\n<li>eine intensive Einarbeitung</li>\n<li>eine familienfreundliche und kollegiale Unternehmenskultur</li>\n<li>ein Firmenwagen auch zur privaten Nutzung</li>\n<li>Laptop, Handy</li>\n</ul>\n<p>Wir legen großen Wert auf ein verantwortungsvolles, kollegiales und kooperatives Miteinander.</p>\n<p>Ihr Interesse ist geweckt ?</p>\n<p>Dann senden Sie bitte Ihre aussagekräftigen Onlinebewerbungsunterlagen (Lebenslauf, Arbeitszeugnis und Qualifikationsnachweis) an:</p>\n<p><strong>Dr. Belter Cosmetic</strong></p>\n<p><strong>Frau Antje Ringe</strong></p>\n<p><strong>Telefon: 01516 - 470 93 18</strong></p>\n",
    remote: false,
    url: "https://arbeitnow.com/view/aussendienstmitarbeiterin-mwd-dr-belter-cosmetic-gmbh-191296",
    tags: ["Sales"],
    job_types: ["Vollzeit (unbefristet)", "senior-position"],
    location: "Magdeburg",
    created_at: 1639929853,
  },
  {
    slug: "general-assistant-everlast-fitness-everlast-fitness-444387",
    company_name: "Everlast Fitness",
    title: "General Assistant - Everlast Fitness",
    description:
      "<p>Everlast Fitness are the newest business venture of the international retail giant Frasers group and we are taking the fitness world by storm.</p><p>In our world the passion and ambition of our people have kept us moving. Their passion for fitness is second to none, their knowledge and service levels hook the customer, their drive and ambition to be the best is unrivalled.</p><p><u><strong>General Assistant - 20 hours</strong></u></p><p><strong>Job Purpose:</strong></p><ul><li>To achieve impeccable levels of cleanliness throughout the whole club, with a specific focus on the area’s which can become heavily soiled and outside of acceptable standards, caused through high levels of usage.</li><li>Particular attention should be given to the changing rooms, showers and all wet areas.</li><li>To carry out daily cleaning duties set out by the full management team or key holders</li></ul><p><strong>Need to be:</strong></p><ul><li>Hard working and reliable</li><li>Proactive and adaptable to prioritise key tasks</li><li>Personable and approachable to members</li><li>Willing and able to work the shifts required to suit the needs of the business</li><li>Willing to take on extra hours to cover holidays/staff shortages</li><li>Well organised to conduct/manage multiple tasks throughout the day.</li><li>Understanding of which chemicals are to be used for each task (full training will be given).</li><li>Understanding of COSHH (full training will be given)</li><li>Familiar with safety data sheets and risk assessments for chemicals, equipment and machinery</li></ul><p><strong>Need to Act:</strong></p><ul><li>With energy and drive to perform tasks quickly and effectively</li><li>With initiative, identifying things that require cleaning immediately, without necessarily having to be tasked by a manager In a respectful manner, considering the members and guests around you</li><li>Responsibly and safely when performing all tasks by using the correct Personal Protective Equipment (PPE).With care and consideration by using necessary signage and equipment when performing duties with machinery i.e. Wet floor sign when appropriate, and trailing cables sign when hoovering.</li></ul><p><strong>Main Duties and Responsibilities:</strong></p><ul><li>Deep clean all areas of the club as requested by the club management.</li><li>Deep clean to a standard whereby only hygiene maintenance is required once your task has been completed.</li><li>Daily deep cleaning of the showers and the wet area facilities to an impeccable standard, including the sauna, spa’s and steam room</li><li>Work responsibly to ensure personal and member safety by following health and safety and COSHH guidelines.</li></ul><p>Female applicants required</p><p>This is a part-time role of 20 hours per week</p>",
    remote: false,
    url: "https://arbeitnow.com/view/general-assistant-everlast-fitness-everlast-fitness-444387",
    tags: ["Health", "wellness and fitness", "other"],
    job_types: ["Part time"],
    location: "Barnsley",
    created_at: 1639929122,
  },
  {
    slug: "assistant-manager-en-restauration-fh-courtepaille-187807",
    company_name: "Courtepaille",
    title: "Assistant Manager en restauration (F/H)",
    description:
      "<p>Chez Courtepaille on vous sert de vraies opportunités !</p><p>Depuis le temps qu’on se connait, on peut se tutoyer. On t’a vu grandir et tu n’es pas le seul à avoir évolué. Depuis 2019 Courtepaille a rejoint le groupe napaqaro, leader du marché de la restauration avec plus de 600 restaurants au service de nos clients et de ta carrière. Notre enseigne, présente nationalement, donne sa chance à chacun grâce à de vrais parcours de réussites internes qui ont permis à 25% de nos collaborateurs de devenir manager à travers notre réseau.</p><p>Rejoins-nous pour vivre une expérience conviviale à l’image de celle que tu offriras à tes clients</p><p>En tant qu’Assistant(e) Manager, tes missions seront de :</p><p>· Coordonner une équipe composée de 10 à 20 collaborateurs autour d’un service (organisation, répartition des tâches,)</p><p>· Garantir une expérience client chaleureuse.</p><p>· Veiller au respect des standards et des règles sanitaires tout en participant au service.</p><p>· Mettre en œuvre des plans d’actions sur des dossiers transverses (qualité, hygiène, stocks,)</p><p>· Participer au développement du marketing local</p><p>· Garantir les ouvertures et/ou fermetures du restaurant</p><p>Profil :</p><p>· Opérationnel(e), tu connais le contact client et aimes être sur le terrain.</p><p>· Attentionné(e) et réactif(ve), tu sais t’adapter aux clients.</p><p>· Rigoureux(se), tu sais travailler avec méthode et transmettre ton savoir-faire.</p><p>· Formé(e) à la coordination d’équipe au travers d’un stage, d’une alternance ou d’une première expérience professionnelle, tu es reconnu(e) pour ton dynamisme, ton enthousiasme et ta capacité à fédérer.</p><p>REMUNERATION &amp; AVANTAGES</p><p>Poste à pourvoir en CDI 35h par semaine</p><p>Salaire 1848.27 € brut mensuel</p><p>Prime trimestrielle sur objectif : (potentiel annuel de 2560 € / an)</p><p>Mutuelle avantageuse Participation aux frais de transport</p><p>Repas pris sur place sur la carte du restaurant</p><p>CSE Entreprise</p><p>Opportunités Groupe : Ecole de formation, Parcours de promotion interne certifiant…</p><p> </p><p>Le processus pour apprécier l’ensemble de tes qualités :</p><p>- Un entretien RH téléphonique d’une dizaine de minutes, pour t’assurer que le poste te correspond.</p><p>- Un entretien en restaurant pour te permettre de montrer ta motivation et tes compétences.</p><p>La suite, si on choisit de poursuivre ensemble, ce sont des possibilités d’évolutions professionnelles au sein de la restauration sur toute la France.</p>",
    remote: false,
    url: "https://arbeitnow.com/view/assistant-manager-en-restauration-fh-courtepaille-187807",
    tags: ["Restaurants", "management"],
    job_types: ["Full time"],
    location: "Blagnac",
    created_at: 1639929122,
  },
  {
    slug: "grillardine-hf-courtepaille-493294",
    company_name: "Courtepaille",
    title: "Grillardin.e H/F",
    description:
      "<p>Tu as un don pour le contact client, tu apprécies la convivialité de la restauration et tu recherches une carrière savoureuse ?</p><p>It’s a match !</p><p>On a une belle aventure à vivre ensemble.</p><p>Notre force c’est la convivialité de nos 250 maisons et cette convivialité elle passe par nos collaborateurs. Loin de vous tirer à la courte paille, nous souhaitons des profils dynamiques animés par un esprit familial de cohésion et d’entraide avec l’ambition d’évoluer au sein de notre grande famille.</p><p>Chaque jour, chez Courtepaille nous nous appliquons à faire mijoter dans nos cheminés la recette de notre succès composé d’un savant mélange de tradition et de modernité alors si tu veux venir mettre ton grain de sel dans cette recette : n’hésite plus, envoie ta candidature !<br /> </p><p>Nous recherchons actuellement un.e Grillardin.e pour faire vivre le cœur de notre maison : la cheminée.</p><p>Ta mission si tu l’acceptes :</p><ul><li>Tu assureras la cuisson et l’envoi des grillades avec entrain et en collaboration avec l’équipe</li><li>Ton aisance relationnelle, te permettra de personnaliser le contact client tout en mettant en scène nos produits</li><li>Tu respecteras, avec rigueur, les règles d’hygiène et de sécurité de l’entreprise</li><li>Tu auras la charge de la réception des marchandises et du rangement de celles-ci</li><li>Tu contribueras à la gestion des stocks</li><li>Animé par la satisfaction et la fidélisation de nos clients, tu seras force de proposition pour l’amélioration continue de la qualité de service</li></ul><p><br /><br />Cette annonce s’autodétruira dès lors que le poste sera pourvu alors n’hésite plus et postule vite pour ne pas rater ta chance.</p><p><strong>- Dynamique, souriant, accueillant et méthodique ;</strong></p><p><strong> - Une expérience au poste de grillardin est indispensable</strong></p>",
    remote: false,
    url: "https://arbeitnow.com/view/grillardine-hf-courtepaille-493294",
    tags: ["Restaurants", "customer service"],
    job_types: ["Full time"],
    location: "Blagnac",
    created_at: 1639929122,
  },
];

function App() {
  const [data, setData] = useState([]);
  const [visible, setVisible] = useState(5);

  useEffect(() => {
    // var config = {
    //   method: "get",
    //   url: "https://arbeitnow.com/api/job-board-api",
    //   headers: {},
    // };
    // axios(config)
    //   .then(function (response) {
    //     console.log(response.data);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  }, []);

  return (
    <Container>
      <CssBaseline />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box>
            <Header />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
