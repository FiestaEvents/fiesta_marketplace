import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Define resources here directly to ensure they are available immediately
const resources = {
  // =========================================================================
  // ENGLISH (Default)
  // =========================================================================
  en: {
    translation: {
      landing: {
        nav: {
          features: "Features",
          marketplace: "Marketplace",
          contact: "Contact",
        },
        hero: {
          badge: "The #1 Platform for Venue Owners",
          title: {
            line1: "Simplify Your",
            line2: "Venue Management",
          },
          description:
            "Streamline bookings, manage finances, and organize events with our comprehensive dashboard designed specifically for venue owners.",
          buttons: {
            discoverSystem: "Discover the System",
            contactSales: "Contact Sales",
          },
          loadingPreview: "Loading Dashboard Preview...",
          slideAria: "Go to slide {{number}}",
        },
        products: {
          title: "Our Solutions",
          subtitle: "Tools built for the future of event management",
          webApp: {
            available: "AVAILABLE NOW",
            title: "Venue Management System",
            description:
              "The powerful web-based command center for your venue. Handle bookings, staff, finance, and client communications in one secure place.",
            learnMore: "Get Started",
            features: {
              booking: "Real-time Booking Calendar",
              reports: "Financial Reports & Analytics",
              collaboration: "Team Collaboration Tools",
              database: "Client Database (CRM)",
              invoicing: "Automated Invoicing",
            },
          },
          mobileApp: {
            comingSoon: "COMING SOON",
            title: "Client Mobile App",
            description:
              "A seamless experience for your clients to discover venues, make reservations, and manage their event details on the go.",
            joinWaitlist: "Join Waitlist",
            features: {
              discovery: "Venue Discovery",
              booking: "Instant Booking",
              tools: "Planning Tools",
            },
          },
        },
        features: {
          title: "Why Choose Fiesta?",
          subtitle: "Designed to solve the real challenges of venue management",
          centralized: {
            title: "Centralized Control",
            description:
              "Stop juggling notebooks and spreadsheets. Get a visual calendar, automated invoices, and team scheduling in one dashboard.",
          },
          financial: {
            title: "Financial Insights",
            description:
              "Track revenue, expenses, and profitability per event. Generate professional reports with a single click.",
          },
          marketplace: {
            title: "Built-in Marketplace",
            description:
              "Showcase your venue to thousands of potential clients. Receive inquiries directly into your management system.",
          },
        },
        detail: {
          badge: "FEATURE SPOTLIGHT",
          title: {
            line1: "The Operating System for",
            line2: "Modern Venues",
          },
          description:
            "Fiesta isn't just a calendar. It's a complete business suite designed to help you scale. Manage your entire venue from a single screen, accessible from anywhere.",
          features: {
            centralized: {
              title: "Centralized Command",
              description:
                "View bookings, pending inquiries, and daily schedules at a glance.",
            },
            financial: {
              title: "Financial Management",
              description:
                "Track deposits, payments, and generate automated invoices effortlessly.",
            },
            customization: {
              title: "Custom Configurations",
              description:
                "Set dynamic pricing, manage multiple spaces, and define staff roles.",
            },
          },
          portal: {
            title: "Web Management Portal",
            button: "Request Access",
            features: {
              calendar: "Real-time Availability Calendar",
              crm: "Client CRM Database",
              analytics: "Revenue Analytics & Reports",
              staff: "Staff Scheduling Tools",
            },
          },
        },
        howItWorks: {
          title: "How It Works",
          subtitle: "Get your venue up and running in minutes",
          steps: {
            createAccount: {
              title: "Create Account",
              description: "Sign up and verify your venue details.",
            },
            setupProfile: {
              title: "Setup Profile",
              description: "Add your rooms, capacity, and pricing.",
            },
            configureCalendar: {
              title: "Configure Calendar",
              description: "Set your availability and pricing rules.",
            },
            startManaging: {
              title: "Start Managing",
              description: "Receive bookings and manage events efficiently.",
            },
          },
        },
        pricing: {
          title: "Get Custom Pricing",
          description:
            "We offer flexible pricing plans tailored to your venue size and needs. Contact us for a quote.",
          noHiddenFees: "No Hidden Fees",
          flexiblePlans: "Flexible Plans",
          bestValue: "Best Value",
          callUs: "Call Us",
          contactSales: "Contact Sales",
        },
        faq: {
          title: "Frequently Asked Questions",
          subtitle: "Everything you need to know about Fiesta",
          questions: {
            systemAvailable: {
              q: "Is the Web Management System available now?",
              a: "Yes! The Venue Management System is live and ready to help you manage your business.",
            },
            mobileAppRelease: {
              q: "When will the Mobile App be released?",
              a: "We are currently in the final stages of development. Join our waitlist to be notified when it launches.",
            },
            getStarted: {
              q: "How do I get started?",
              a: "Simply contact our sales team to set up your account and get a guided tour.",
            },
            support: {
              q: "Do you offer support?",
              a: "Yes, we provide 24/7 dedicated support for all our venue partners.",
            },
          },
        },
        contact: {
          title: "Ready to Optimize Your Venue?",
          subtitle:
            "Contact our team today to learn how Fiesta can transform your business.",
          callUs: "Call Us",
          emailUs: "Email Us",
          visitUs: "Visit Us",
          visitMarketplace: "Visit Marketplace",
        },
        footer: {
          product: "Product",
          company: "Company",
          legal: "Legal",
          aboutUs: "About Us",
          privacy: "Privacy Policy",
          terms: "Terms of Service",
          copyright: "© 2025 Fiesta Events.",
          inTunisia: "Made in Tunisia",
        },
      },
      // --- FIESTA VENUE PAGE (Dedicated Page) ---
      fiestaVenue: {
        hero: {
          badge: "The #1 Venue Management System",
          title: { line1: "Stop Managing.", line2: "Start Scaling." },
          description: {
            line1:
              "Ditch the notebook and the messy Excel sheets. Fiesta gives you a professional digital command center.",
            line2: "Start for free, upgrade when you grow.",
          },
          buttons: { startFree: "Start For Free", watchDemo: "Watch Demo" },
          features: {
            noCreditCard: "No credit card required",
            quickSetup: "Setup in 2 minutes",
          },
          imageAlt: "Fiesta Calendar Interface",
          floatingBadge: {
            label: "Productivity Boost",
            value: "+40% Time Saved",
          },
        },
        problem: {
          title: "Is your venue running you, or are you running your venue?",
          items: {
            doubleBookings: {
              title: "Double Bookings",
              description:
                "The nightmare of explaining to a client that their date was accidentally given to someone else.",
            },
            lostPayments: {
              title: "Lost Payments",
              description:
                "Forgetting who paid the deposit, who owes the balance, and losing track of expense receipts.",
            },
            messyContracts: {
              title: "Messy Contracts",
              description:
                "Word documents that look unprofessional and take 30 minutes to edit for every new client.",
            },
          },
        },
        features: {
          title: "Everything You Need to Succeed",
          subtitle: "From the first inquiry to the final invoice.",
          previewAlt: "Feature Preview",
          tabs: {
            calendar: {
              title: "Smart Calendar",
              description:
                "Visual schedule management with conflict detection.",
              badge: "INCLUDED IN FREE",
            },
            finance: {
              title: "Financial Suite",
              description: "Invoices, expense tracking, and profit reports.",
              badge: "PRO FEATURE",
            },
            legal: {
              title: "Auto-Contracts",
              description: "Generate legal contracts in one click.",
              badge: "PRO FEATURE",
            },
          },
          details: {
            calendar: {
              title: "Never Double Book Again",
              description:
                "The core of your business is the calendar. Our system prevents you from booking two events at the same time. You can see your schedule by Month, Week, or Day.",
              features: {
                dragDrop: "Drag & Drop Interface",
                eventStatus: "Event Status (Pending/Confirmed)",
                clientView: "Client Quick-View",
                mobile: "Mobile Friendly",
              },
            },
            finance: {
              title: "Know Your Numbers",
              description:
                "Stop guessing your profit. Track every dinar coming in and going out. Create professional PDF invoices that impress your clients.",
              features: {
                invoices: "Automated PDF Invoices",
                paymentTracking: "Payment Tracking",
                expenseManagement: "Expense Management",
                reports: "Monthly Profit Reports",
              },
            },
            legal: {
              title: "Legal Protection Made Easy",
              description:
                "Contracts protect your business, but they are a pain to write. Fiesta auto-fills your standard contract with the event details instantly.",
              features: {
                templates: "Custom Contract Templates",
                autoFill: "Auto-fill Client Data",
                pdf: "Print Ready PDFs",
                archives: "Digital Archives",
              },
            },
          },
        },
        pricing: {
          title: "Simple, Transparent Pricing",
          subtitle:
            "Start for free. Upgrade only when you need the power tools.",
          plans: {
            starter: {
              title: "Starter",
              description: "Perfect for getting organized.",
              price: "Free",
              period: " / forever",
              button: "Create Free Account",
              features: {
                events: "Unlimited Events Calendar",
                crm: "Client Database (CRM)",
                dashboard: "Basic Dashboard Access",
                reports: "Financial Reports",
                invoices: "Invoices & Contracts",
              },
            },
            pro: {
              badge: "RECOMMENDED",
              title: "Pro Business",
              description: "For venues serious about growth.",
              price: "Contact Us",
              contact: "for custom pricing",
              button: "Upgrade to Pro",
              features: {
                starter: "Everything in Starter",
                reports: "Advanced Financial Reports",
                invoices: "Invoices & Expense Tracking",
                contracts: "One-Click Contracts",
                staff: "Staff Task Management",
              },
            },
          },
        },
        faq: {
          title: "Common Questions",
          questions: {
            freeForever: {
              q: "Is the free version really free forever?",
              a: "Yes. If you only need to manage your calendar and client list, you will never have to pay. We hope you grow enough to need the Pro features later!",
            },
            dataSecurity: {
              q: "Is my data secure?",
              a: "Absolutely. We use industry-standard encryption. Unlike a physical notebook, you can't lose your data if you lose your phone.",
            },
            dataExport: {
              q: "Can I export my data?",
              a: "Yes, Pro users can export financial reports and client lists to Excel or PDF at any time.",
            },
          },
        },
        cta: {
          title: "Ready to professionalize your venue?",
          description:
            "Join hundreds of Tunisian venue owners who are saving time and making more money with Fiesta.",
          buttons: {
            startFree: "Get Started for Free",
            contactSales: "Contact Sales",
          },
        },
      },
    },
  },

  // =========================================================================
  // FRENCH (Français)
  // =========================================================================
  fr: {
    translation: {
      landing: {
        nav: {
          features: "Fonctionnalités",
          marketplace: "Marketplace",
          contact: "Contact",
        },
        hero: {
          badge: "La Plateforme N°1 pour les Salles",
          title: {
            line1: "Simplifiez Votre",
            line2: "Gestion de Salle",
          },
          description:
            "Centralisez vos réservations, gérez vos finances et organisez vos événements avec notre tableau de bord complet conçu pour les propriétaires.",
          buttons: {
            discoverSystem: "Découvrir le Système",
            contactSales: "Contacter Ventes",
          },
          loadingPreview: "Chargement de l'aperçu...",
          slideAria: "Aller à la diapositive {{number}}",
        },
        products: {
          title: "Nos Solutions",
          subtitle: "Des outils conçus pour l'avenir de l'événementiel",
          webApp: {
            available: "DISPONIBLE",
            title: "Système de Gestion",
            description:
              "Le centre de commande web pour votre salle. Gérez les réservations, le personnel et les finances en un seul endroit.",
            learnMore: "En Savoir Plus",
            features: {
              booking: "Calendrier en Temps Réel",
              reports: "Rapports Financiers",
              collaboration: "Outils d'Équipe",
              database: "Base Clients (CRM)",
              invoicing: "Facturation Auto",
            },
          },
          mobileApp: {
            comingSoon: "BIENTÔT",
            title: "App Mobile Client",
            description:
              "Une expérience fluide pour vos clients pour découvrir et réserver.",
            joinWaitlist: "Rejoindre la liste",
            features: {
              discovery: "Découverte",
              booking: "Réservation Instantanée",
              tools: "Outils de Planification",
            },
          },
        },
        features: {
          title: "Pourquoi Choisir Fiesta ?",
          subtitle: "Conçu pour résoudre les vrais défis de la gestion",
          centralized: {
            title: "Contrôle Centralisé",
            description:
              "Arrêtez les cahiers et Excel. Un calendrier visuel et intuitif.",
          },
          financial: {
            title: "Infos Financières",
            description:
              "Suivez revenus, dépenses et rentabilité par événement.",
          },
          marketplace: {
            title: "Marketplace Intégré",
            description:
              "Mettez en avant votre salle auprès de milliers de clients.",
          },
        },
        detail: {
          badge: "FONCTIONNALITÉS CLÉS",
          title: {
            line1: "Le Système d'Exploitation",
            line2: "des Salles Modernes",
          },
          description:
            "Fiesta n'est pas juste un calendrier. C'est une suite professionnelle complète pour vous aider à grandir.",
          features: {
            centralized: {
              title: "Commande Centralisée",
              description:
                "Visualisez réservations et demandes en un coup d'œil.",
            },
            financial: {
              title: "Gestion Financière",
              description: "Suivez les acomptes et factures sans effort.",
            },
            customization: {
              title: "Configurations Personnalisées",
              description: "Définissez prix dynamiques et rôles du personnel.",
            },
          },
          portal: {
            title: "Portail de Gestion Web",
            button: "Demander l'Accès",
            features: {
              calendar: "Disponibilité en Temps Réel",
              crm: "Base de Données Clients",
              analytics: "Rapports de Revenus",
              staff: "Planification du Personnel",
            },
          },
        },
        howItWorks: {
          title: "Comment Ça Marche",
          subtitle: "Votre salle opérationnelle en quelques minutes",
          steps: {
            createAccount: {
              title: "Créer un Compte",
              description: "Inscrivez-vous et vérifiez vos détails.",
            },
            setupProfile: {
              title: "Configurer le Profil",
              description: "Ajoutez vos salles et tarifs.",
            },
            configureCalendar: {
              title: "Configurer le Calendrier",
              description: "Définissez vos disponibilités.",
            },
            startManaging: {
              title: "Commencer à Gérer",
              description: "Recevez des réservations efficacement.",
            },
          },
        },
        pricing: {
          title: "Obtenez un Prix Personnalisé",
          description:
            "Nous offrons des plans flexibles adaptés à la taille de votre salle.",
          noHiddenFees: "Pas de Frais Cachés",
          flexiblePlans: "Plans Flexibles",
          bestValue: "Meilleure Valeur",
          callUs: "Appelez-nous",
          contactSales: "Contacter Ventes",
        },
        faq: {
          title: "Questions Fréquentes",
          subtitle: "Tout ce que vous devez savoir sur Fiesta",
          questions: {
            systemAvailable: {
              q: "Le système est-il disponible ?",
              a: "Oui ! Le système est en ligne et prêt à l'emploi.",
            },
            mobileAppRelease: {
              q: "Quand sort l'application mobile ?",
              a: "Bientôt. Rejoignez la liste d'attente.",
            },
            getStarted: {
              q: "Comment commencer ?",
              a: "Contactez notre équipe pour une démo.",
            },
            support: {
              q: "Offrez-vous du support ?",
              a: "Oui, un support dédié 24/7 pour nos partenaires.",
            },
          },
        },
        contact: {
          title: "Prêt à Optimiser ?",
          subtitle: "Contactez notre équipe aujourd'hui.",
          callUs: "Appelez-nous",
          emailUs: "Email",
          visitUs: "Visitez-nous",
          visitMarketplace: "Visiter le Marketplace",
        },
        footer: {
          product: "Produit",
          company: "Entreprise",
          legal: "Légal",
          aboutUs: "À Propos",
          privacy: "Confidentialité",
          terms: "Conditions",
          copyright: "© 2025 Fiesta Events.",
          inTunisia: "Fait en Tunisie",
        },
      },
      // --- FIESTA VENUE PAGE (Dedicated Page) ---
      fiestaVenue: {
        hero: {
          badge: "Le Système N°1 de Gestion de Salle",
          title: { line1: "Arrêtez de Gérer.", line2: "Commencez à Grandir." },
          description: {
            line1:
              "Oubliez le carnet et les fichiers Excel. Fiesta vous offre un centre de commande numérique professionnel.",
            line2: "Commencez gratuitement, payez quand vous grandissez.",
          },
          buttons: {
            startFree: "Commencer Gratuitement",
            watchDemo: "Voir la Démo",
          },
          features: {
            noCreditCard: "Pas de carte requise",
            quickSetup: "Configuration en 2 min",
          },
          imageAlt: "Interface Calendrier Fiesta",
          floatingBadge: {
            label: "Gain de Productivité",
            value: "+40% de Temps Gagné",
          },
        },
        problem: {
          title: "Votre salle vous gère-t-elle, ou gérez-vous votre salle ?",
          items: {
            doubleBookings: {
              title: "Doubles Réservations",
              description:
                "Le cauchemar d'expliquer à un client que sa date a été donnée par erreur.",
            },
            lostPayments: {
              title: "Paiements Perdus",
              description:
                "Oublier qui a payé l'acompte, qui doit le reste, et perdre les reçus.",
            },
            messyContracts: {
              title: "Contrats Désordonnés",
              description:
                "Des documents Word non professionnels qui prennent 30 minutes à éditer.",
            },
          },
        },
        features: {
          title: "Tout ce dont vous avez besoin",
          subtitle: "De la première demande à la facture finale.",
          previewAlt: "Aperçu des fonctionnalités",
          tabs: {
            calendar: {
              title: "Calendrier Intelligent",
              description: "Gestion visuelle avec détection de conflits.",
              badge: "INCLUS (GRATUIT)",
            },
            finance: {
              title: "Suite Financière",
              description: "Factures, suivi des dépenses et rapports.",
              badge: "PRO",
            },
            legal: {
              title: "Contrats Auto",
              description: "Générez des contrats légaux en un clic.",
              badge: "PRO",
            },
          },
          details: {
            calendar: {
              title: "Plus Jamais de Double Réservation",
              description:
                "Le cœur de votre activité. Notre système empêche les conflits. Vue par Mois, Semaine ou Jour.",
              features: {
                dragDrop: "Interface Glisser-Déposer",
                eventStatus: "Statut (En attente/Confirmé)",
                clientView: "Vue Rapide Client",
                mobile: "Compatible Mobile",
              },
            },
            finance: {
              title: "Maîtrisez Vos Chiffres",
              description:
                "Arrêtez de deviner. Suivez chaque dinar. Créez des factures PDF professionnelles.",
              features: {
                invoices: "Factures PDF Automatisées",
                paymentTracking: "Suivi des Paiements",
                expenseManagement: "Gestion des Dépenses",
                reports: "Rapports de Profit Mensuels",
              },
            },
            legal: {
              title: "Protection Juridique Facile",
              description:
                "Les contrats sont essentiels mais pénibles à rédiger. Fiesta remplit vos contrats automatiquement.",
              features: {
                templates: "Modèles Personnalisables",
                autoFill: "Remplissage Auto Données",
                pdf: "PDF Prêts à Imprimer",
                archives: "Archives Numériques",
              },
            },
          },
        },
        pricing: {
          title: "Tarification Simple et Transparente",
          subtitle:
            "Commencez gratuitement. Passez au niveau supérieur quand vous en avez besoin.",
          plans: {
            starter: {
              title: "Starter",
              description: "Parfait pour s'organiser.",
              price: "Gratuit",
              period: " / pour toujours",
              button: "Créer un Compte Gratuit",
              features: {
                events: "Calendrier Illimité",
                crm: "Base de Données Clients",
                dashboard: "Accès Tableau de Bord",
                reports: "Rapports Financiers",
                invoices: "Factures & Contrats",
              },
            },
            pro: {
              badge: "RECOMMANDÉ",
              title: "Pro Business",
              description: "Pour les salles qui veulent grandir.",
              price: "Contactez-nous",
              contact: "pour un devis",
              button: "Passer au Pro",
              features: {
                starter: "Tout dans Starter",
                reports: "Rapports Financiers Avancés",
                invoices: "Facturation & Dépenses",
                contracts: "Contrats en 1 Clic",
                staff: "Gestion Tâches Équipe",
              },
            },
          },
        },
        faq: {
          title: "Questions Courantes",
          questions: {
            freeForever: {
              q: "La version gratuite l'est-elle vraiment ?",
              a: "Oui. Pour gérer calendrier et clients, vous ne paierez jamais. Nous espérons que vous grandirez vers le Pro !",
            },
            dataSecurity: {
              q: "Mes données sont-elles sécurisées ?",
              a: "Absolument. Chiffrement standard. Contrairement à un carnet, vous ne perdez rien si vous perdez votre téléphone.",
            },
            dataExport: {
              q: "Puis-je exporter mes données ?",
              a: "Oui, les utilisateurs Pro peuvent exporter rapports et listes clients vers Excel/PDF.",
            },
          },
        },
        cta: {
          title: "Prêt à professionnaliser votre salle ?",
          description:
            "Rejoignez des centaines de propriétaires tunisiens qui gagnent du temps et de l'argent avec Fiesta.",
          buttons: {
            startFree: "Commencer Gratuitement",
            contactSales: "Contacter Ventes",
          },
        },
      },
    },
  },

  // =========================================================================
  // ARABIC (العربية) - RTL
  // =========================================================================
  ar: {
    translation: {
      landing: {
        nav: {
          features: "المميزات",
          marketplace: "السوق",
          contact: "اتصل بنا",
        },
        hero: {
          badge: "المنصة رقم 1 لأصحاب القاعات",
          title: {
            line1: "بسط إدارة",
            line2: "قاعة الأفراح",
          },
          description:
            "نظم الحجوزات، أدر الشؤون المالية، وتابع الفعاليات من خلال لوحة تحكم شاملة مصممة خصيصاً لأصحاب القاعات في تونس.",
          buttons: {
            discoverSystem: "اكتشف النظام",
            contactSales: "تواصل مع المبيعات",
          },
          loadingPreview: "جاري تحميل المعاينة...",
          slideAria: "انتقل للشريحة {{number}}",
        },
        products: {
          title: "حلولنا",
          subtitle: "أدوات مصممة لمستقبل إدارة المناسبات",
          webApp: {
            available: "متوفر الآن",
            title: "نظام إدارة القاعات",
            description:
              "مركز القيادة لقاعتك. أدر الحجوزات، الموظفين، والمالية في مكان واحد آمن.",
            learnMore: "ابدأ الآن",
            features: {
              booking: "تقويم فوري للحجوزات",
              reports: "تقارير مالية وتحليلات",
              collaboration: "أدوات فريق العمل",
              database: "قاعدة بيانات الحرفاء (CRM)",
              invoicing: "فواتير آلية",
            },
          },
          mobileApp: {
            comingSoon: "قريباً",
            title: "تطبيق الحرفاء",
            description:
              "تجربة سلسة لحرفائك لاكتشاف القاعات والحجز وإدارة تفاصيل مناسباتهم.",
            joinWaitlist: "انضم لقائمة الانتظار",
            features: {
              discovery: "اكتشاف القاعات",
              booking: "حجز فوري",
              tools: "أدوات التخطيط",
            },
          },
        },
        features: {
          title: "لماذا تختار فييستا؟",
          subtitle: "صمم لحل المشاكل الحقيقية لإدارة القاعات",
          centralized: {
            title: "تحكم مركزي",
            description:
              "توقف عن استخدام الدفاتر والإكسيل. احصل على تقويم مرئي وفواتير آلية.",
          },
          financial: {
            title: "رؤى مالية",
            description:
              "تتبع المداخيل، المصاريف، والربحية لكل حفل. استخرج تقارير احترافية بضغطة زر.",
          },
          marketplace: {
            title: "سوق مدمج",
            description:
              "اعرض قاعتك لآلاف الحرفاء المحتملين. استقبل الطلبات مباشرة في نظام الإدارة.",
          },
        },
        detail: {
          badge: "ميزات حصرية",
          title: {
            line1: "نظام التشغيل",
            line2: "للقاعات العصرية",
          },
          description:
            "فييستا ليس مجرد تقويم. إنه نظام أعمال متكامل مصمم لمساعدتك على النمو.",
          features: {
            centralized: {
              title: "قيادة مركزية",
              description:
                "شاهد الحجوزات والطلبات المعلقة والجدول اليومي في لمحة.",
            },
            financial: {
              title: "إدارة مالية",
              description: "تتبع العربون (Avance) والمدفوعات والفواتير بسهولة.",
            },
            customization: {
              title: "إعدادات مخصصة",
              description:
                "حدد أسعاراً ديناميكية، أدر قاعات متعددة، وحدد صلاحيات الموظفين.",
            },
          },
          portal: {
            title: "بوابة الإدارة",
            button: "اطلب الدخول",
            features: {
              calendar: "تفرغ القاعة في الوقت الفعلي",
              crm: "قاعدة بيانات الحرفاء",
              analytics: "تقارير المداخيل",
              staff: "جدولة الموظفين",
            },
          },
        },
        howItWorks: {
          title: "كيف يعمل النظام",
          subtitle: "ابدأ العمل على النظام في دقائق",
          steps: {
            createAccount: {
              title: "أنشئ حساباً",
              description: "سجل وأكد تفاصيل قاعتك.",
            },
            setupProfile: {
              title: "جهز الملف",
              description: "أضف القاعات، السعة، والأسعار.",
            },
            configureCalendar: {
              title: "ضبط التقويم",
              description: "حدد أوقات العمل والتفرغ.",
            },
            startManaging: {
              title: "ابدأ الإدارة",
              description: "استقبل الحجوزات ونظم العمل بكفاءة.",
            },
          },
        },
        pricing: {
          title: "احصل على عرض خاص",
          description: "نقدم خطط أسعار مرنة تناسب حجم قاعتك واحتياجاتك.",
          noHiddenFees: "بدون رسوم خفية",
          flexiblePlans: "خطط مرنة",
          bestValue: "أفضل قيمة",
          callUs: "اتصل بنا",
          contactSales: "تواصل مع المبيعات",
        },
        faq: {
          title: "أسئلة شائعة",
          subtitle: "كل ما تحتاج معرفته عن فييستا",
          questions: {
            systemAvailable: {
              q: "هل النظام متوفر الآن؟",
              a: "نعم! نظام إدارة القاعات جاهز للعمل.",
            },
            mobileAppRelease: {
              q: "متى سيصدر التطبيق؟",
              a: "نحن في المراحل النهائية. انضم للقائمة لتصلك الأخبار.",
            },
            getStarted: {
              q: "كيف أبدأ؟",
              a: "فقط اتصل بفريق المبيعات لفتح حسابك وتدريبك.",
            },
            support: {
              q: "هل توفرون الدعم الفني؟",
              a: "نعم، نوفر دعماً مخصصاً 24/7 لشركائنا.",
            },
          },
        },
        contact: {
          title: "جاهز لتطوير قاعتك؟",
          subtitle: "تواصل مع فريقنا اليوم لتعرف كيف يمكن لفييستا تطوير عملك.",
          callUs: "اتصل بنا",
          emailUs: "راسلنا",
          visitUs: "زرنا",
          visitMarketplace: "زيارة السوق",
        },
        footer: {
          product: "المنتج",
          company: "الشركة",
          legal: "قانوني",
          aboutUs: "من نحن",
          privacy: "الخصوصية",
          terms: "الشروط",
          copyright: "© 2025 فييستا إيفنتس.",
          inTunisia: "صنع في تونس",
        },
      },
      // --- FIESTA VENUE PAGE (Dedicated Page) ---
      fiestaVenue: {
        hero: {
          badge: "النظام رقم 1 لإدارة القاعات",
          title: { line1: "توقف عن التدوين.", line2: "ابدأ بالتطوير." },
          description: {
            line1:
              "تخلص من الكراس وملفات الإكسيل المعقدة. فييستا يمنحك مركز قيادة رقمي احترافي.",
            line2: "ابدأ مجاناً، وادفع عندما يكبر عملك.",
          },
          buttons: { startFree: "ابدأ مجاناً", watchDemo: "شاهد العرض" },
          features: {
            noCreditCard: "لا يتطلب بطاقة بنكية",
            quickSetup: "تجهيز في دقيقتين",
          },
          imageAlt: "واجهة تقويم فييستا",
          floatingBadge: { label: "زيادة الإنتاجية", value: "+40% توفير وقت" },
        },
        problem: {
          title: "هل تدير قاعتك، أم أن قاعتك هي التي تديرك؟",
          items: {
            doubleBookings: {
              title: "حجز مزدوج",
              description:
                "كابوس إخبار الحريف أن تاريخ زفافه قد أُعطي لشخص آخر بالخطأ.",
            },
            lostPayments: {
              title: "مداخيل ضائعة",
              description:
                "نسيان من دفع العربون، ومن عليه بقية المبلغ، وضياع وصولات المصاريف.",
            },
            messyContracts: {
              title: "عقود غير منظمة",
              description:
                "ملفات وورد غير احترافية تأخذ 30 دقيقة للتعديل لكل حريف جديد.",
            },
          },
        },
        features: {
          title: "كل ما تحتاجه للنجاح",
          subtitle: "من أول استفسار إلى الفاتورة النهائية.",
          previewAlt: "معاينة الميزات",
          tabs: {
            calendar: {
              title: "تقويم ذكي",
              description: "إدارة مرئية للجدول مع كشف التضارب.",
              badge: "مشمول في المجاني",
            },
            finance: {
              title: "الحزمة المالية",
              description: "فواتير، تتبع مصاريف، وتقارير ربحية.",
              badge: "احترافي (PRO)",
            },
            legal: {
              title: "عقود آلية",
              description: "إنشاء عقود قانونية بضغطة زر.",
              badge: "احترافي (PRO)",
            },
          },
          details: {
            calendar: {
              title: "لا لحجز نفس الموعد مرتين",
              description:
                "التقويم هو قلب عملك. نظامنا يمنعك من حجز مناسبتين في نفس الوقت. شاهد جدولك بالشهر، الأسبوع، أو اليوم.",
              features: {
                dragDrop: "واجهة سحب وإفلات",
                eventStatus: "حالة الحجز (مؤكد/معلق)",
                clientView: "نظرة سريعة للحريف",
                mobile: "يعمل على الهاتف",
              },
            },
            finance: {
              title: "اعرف أرقامك",
              description:
                "توقف عن التخمين. تتبع كل دينار يدخل أو يخرج. أنشئ فواتير PDF احترافية تبهر حرفائك.",
              features: {
                invoices: "فواتير PDF آلية",
                paymentTracking: "تتبع الدفعات (عربون/باقي)",
                expenseManagement: "إدارة المصاريف",
                reports: "تقارير ربح شهرية",
              },
            },
            legal: {
              title: "حماية قانونية سهلة",
              description:
                "العقود تحمي عملك، لكن كتابتها متعبة. فييستا يملأ عقودك تلقائياً بتفاصيل المناسبة.",
              features: {
                templates: "نماذج عقود مخصصة",
                autoFill: "ملء تلقائي للبيانات",
                pdf: "PDF جاهز للطباعة",
                archives: "أرشيف رقمي",
              },
            },
          },
        },
        pricing: {
          title: "أسعار بسيطة وشفافة",
          subtitle: "ابدأ مجاناً. قم بالترقية فقط عندما تحتاج أدوات أقوى.",
          plans: {
            starter: {
              title: "البداية (Starter)",
              description: "مثالية لتنظيم العمل.",
              price: "مجاني",
              period: " / للأبد",
              button: "أنشئ حساباً مجانياً",
              features: {
                events: "تقويم غير محدود",
                crm: "قاعدة بيانات الحرفاء",
                dashboard: "لوحة تحكم أساسية",
                reports: "تقارير مالية",
                invoices: "فواتير وعقود",
              },
            },
            pro: {
              badge: "موصى به",
              title: "الأعمال (Pro)",
              description: "للقاعات التي تبحث عن النمو.",
              price: "اتصل بنا",
              contact: "للحصول على عرض",
              button: "ترقية إلى Pro",
              features: {
                starter: "كل مميزات البداية",
                reports: "تقارير مالية متقدمة",
                invoices: "فواتير وتتبع مصاريف",
                contracts: "عقود بضغطة زر",
                staff: "إدارة مهام الفريق",
              },
            },
          },
        },
        faq: {
          title: "أسئلة شائعة",
          questions: {
            freeForever: {
              q: "هل النسخة المجانية حقاً مجانية؟",
              a: "نعم. إذا كنت تحتاج فقط لإدارة التقويم وقائمة الحرفاء، لن تدفع أبداً.",
            },
            dataSecurity: {
              q: "هل بياناتي آمنة؟",
              a: "بالتأكيد. نستخدم تشفيراً عالمياً. على عكس الدفتر، لن تضيع بياناتك بضياع الهاتف.",
            },
            dataExport: {
              q: "هل يمكنني استخراج بياناتي؟",
              a: "نعم، مشتركو Pro يمكنهم استخراج التقارير وقوائم الحرفاء إلى Excel أو PDF.",
            },
          },
        },
        cta: {
          title: "جاهز لتطوير إدارة قاعتك؟",
          description:
            "انضم لمئات أصحاب القاعات في تونس الذين يوفرون الوقت والمال مع فييستا.",
          buttons: {
            startFree: "ابدأ مجاناً",
            contactSales: "تواصل مع المبيعات",
          },
        },
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  // Set Default Language to French
  lng: "fr",
  fallbackLng: "fr",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
