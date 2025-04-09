# Kayapa Sanat Takip (KST) API

Kayapa Sanat Akademisi için geliştirilmiş yönetim sistemi API'si. Bu sistem, sanat akademisinin öğrenci takibi, ders programı yönetimi, ödeme takibi ve bildirim yönetimi gibi temel ihtiyaçlarını karşılamak üzere tasarlanmıştır.

## 🚀 Özellikler

- 👥 **Kullanıcı Yönetimi**
  - Rol tabanlı yetkilendirme (Admin, Öğrenci)
  - JWT tabanlı kimlik doğrulama
  - Öğrenci kayıt ve giriş işlemleri
  - Kullanıcı durumu takibi (Aktif/Pasif)

## 🛠 Teknolojiler

- **Backend Framework**: [NestJS](https://nestjs.com/)
- **Veritabanı**: PostgreSQL
- **ORM**: Prisma
- **Kimlik Doğrulama**: JWT
- **Validasyon**: class-validator
- **API Dökümantasyonu**: Swagger (Yakında)

## ⚙️ Gereksinimler

- Node.js (v18 veya üzeri)
- PostgreSQL
- npm veya yarn

## 📦 Kurulum

1. Projeyi klonlayın
```bash
git clone https://github.com/Yigitcan-oztrk/kayapaSanatTakip.git
cd kst
```

2. Bağımlılıkları yükleyin
```bash
npm install
```

3. Ortam değişkenlerini ayarlayın
```bash
cp .env.example .env
# .env dosyasını kendi ortamınıza göre düzenleyin
```

4. Veritabanını oluşturun
```bash
# PostgreSQL veritabanını oluşturun
# .env dosyasındaki DATABASE_URL'i güncelleyin

# Migration'ları çalıştırın
npx prisma migrate dev
```

5. (Opsiyonel) Admin kullanıcısı oluşturun
```bash
# Seed script ile (önerilen)
npx prisma db seed

# VEYA

# Prisma Studio ile manuel olarak (sadece development)
npx prisma studio
```

6. Uygulamayı başlatın
```bash
# Geliştirme modu
npm run start:dev

# Production modu
npm run build
npm run start:prod
```

## 🔐 Güvenlik

- Şifreler bcrypt ile hashlenir
- JWT token kullanılır
- Role-based access control (RBAC) uygulanır
- Request validation yapılır
- Global error handling mevcuttur

## 🌳 Branch Stratejisi

- `developer`: Aktif geliştirme branch'i
- `test`: Test ortamı
- `production`: Canlı ortam

## 📝 API Dokümantasyonu

Detaylı API dokümantasyonu için [API.md](docs/API.md) dosyasına bakınız.

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje [MIT lisansı](LICENSE) ile lisanslanmıştır.

## 📞 İletişim

Proje Yöneticisi - [@YigitcanOzturk](https://github.com/Yigitcan-oztrk)
