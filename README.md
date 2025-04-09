# Kayapa Sanat Takip (KST) API

Kayapa Sanat Akademisi için geliştirilmiş yönetim sistemi API'si. Bu sistem, sanat akademisinin öğrenci takibi, ders programı yönetimi, ödeme takibi ve bildirim yönetimi gibi temel ihtiyaçlarını karşılamak üzere tasarlanmıştır.

## Özellikler

- 👥 **Kullanıcı Yönetimi**
  - Rol tabanlı yetkilendirme (Admin, Öğretmen, Öğrenci, Veli)
  - Güvenli kimlik doğrulama
  - Kullanıcı profil yönetimi

## Teknolojiler

- **Backend Framework**: [NestJS](https://nestjs.com/)
- **Veritabanı**: PostgreSQL
- **ORM**: Prisma
- **Containerization**: Docker
- **API Documentation**: Swagger/OpenAPI
- **Authentication**: JWT

## Gereksinimler

- Node.js (v18 veya üzeri)
- Docker ve Docker Compose
- npm veya yarn

## Kurulum

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

4. Docker container'ını başlatın
```bash
docker-compose up -d
```

5. Veritabanı migration'larını çalıştırın
```bash
npx prisma migrate dev
```

6. Uygulamayı başlatın
```bash
# Geliştirme modu
npm run start:dev

# Production modu
npm run build
npm run start:prod
```

## Geliştirme

### Branch Stratejisi

- `developer`: Aktif geliştirme branch'i
- `test`: Test ortamı
- `production`: Canlı ortam

### Veritabanı Yönetimi

Prisma ORM kullanarak veritabanı işlemlerini yönetiyoruz:

```bash
# Şema değişikliklerini veritabanına uygulama
npx prisma migrate dev

# Sadece production ortamında migration'ları uygulama
npx prisma migrate deploy

# Prisma Studio'yu başlatma (veritabanı yönetim arayüzü)
npx prisma studio
```

## Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch'i oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'feat: add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## Lisans

Bu proje [MIT lisansı](LICENSE) ile lisanslanmıştır.

## İletişim

Proje Yöneticisi - [@YigitcanOzturk](https://github.com/Yigitcan-oztrk)
