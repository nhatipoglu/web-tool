```
mermaid
src/
│
├── assets/               # Statik dosyalar (CSS, resimler vb.)
│   ├── css/
│   ├── images/
│   └── fonts/
│
├── components/           # Tekrar kullanılabilir genel bileşenler
│   ├── Sidebar.js
│   ├── Header.js
│   └── Footer.js
│
├── features/             # Her bir özellik için modüller (büyük modüler yapı)
│   ├── Reports/          # Raporlama ile ilgili tüm dosyalar burada
│   │   ├── SavedReports.js
│   │   ├── ReportList.js
│   │   └── ReportDetail.js
│   └── Dashboard/        # Dashboard ile ilgili tüm dosyalar burada
│       ├── Dashboard.js
│       └── Widget.js
│
├── layouts/              # Sayfa düzenleri ve ana şablonlar
│   ├── MainLayout.js     # Genel sayfa düzeni (header, sidebar, footer içerir)
│   └── AdminLayout.js
│
├── pages/                # Sayfa bileşenleri (birden fazla bileşeni içerebilir)
│   ├── HomePage.js
│   ├── LoginPage.js
│   └── ReportsPage.js
│
├── services/             # API ve veri yönetim servisleri
│   └── reportService.js  # API çağrıları (raporlar için)
│
├── store/                # Global state management (eğer Redux kullanıyorsak)
│   ├── reducers/
│   ├── actions/
│   └── store.js
│
├── App.js                # Uygulamanın ana bileşeni ve yönlendirmeler
├── index.js              # Projenin giriş noktası
└── routes/               # Uygulama yönlendirmeleri
    ├── index.js
    └── PrivateRoute.js   # Giriş gerektiren rotalar
```