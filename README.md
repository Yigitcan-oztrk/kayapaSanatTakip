# KST (Kayapa Sanat Takip) API

Bu proje, Kayapa Sanat Akademisi için geliştirilmiş bir yönetim sistemi API'sidir. Sistem, öğrenci takibi, ders programı yönetimi, ödeme takibi ve bildirim yönetimi gibi özellikleri içerecektir.

## Proje Durumu

### Tamamlanan Adımlar

1. Temel Proje Yapısı
   - NestJS projesi oluşturuldu
   - TypeScript yapılandırması tamamlandı
   - Git yapılandırması (.gitignore) tamamlandı
   - Temel bağımlılıklar yüklendi

2. Veritabanı Bağlantısı
   - PostgreSQL için TypeORM entegrasyonu yapıldı
   - Veritabanı konfigürasyonu için ConfigModule entegre edildi

3. API Temel Ayarları
   - Global API prefix (/api) tanımlandı
   - CORS yapılandırması tamamlandı
   - Validation pipe entegre edildi

4. Modüler Yapı
   - Users modülü oluşturuldu
   - Auth modülü oluşturuldu
   - Courses modülü oluşturuldu
   - Payments modülü oluşturuldu
   - Notifications modülü oluşturuldu

### Yapılacaklar

1. Veritabanı Modelleri
   - [ ] Öğrenci/Veli modeli
   - [ ] Ders modeli
   - [ ] Ödeme modeli
   - [ ] Bildirim modeli

2. API Endpoint'leri
   - [ ] Kullanıcı yönetimi (Users)
   - [ ] Kimlik doğrulama (Auth)
   - [ ] Ders yönetimi (Courses)
   - [ ] Ödeme takibi (Payments)
   - [ ] Bildirim sistemi (Notifications)

3. Güvenlik
   - [ ] JWT entegrasyonu
   - [ ] Rol tabanlı yetkilendirme
   - [ ] Şifreleme ve güvenlik önlemleri

4. Bildirim Sistemi
   - [ ] Email bildirimleri
   - [ ] Ödeme hatırlatmaları
   - [ ] Ders programı bildirimleri

## Proje Yapısı

```
src/
├── users/               # Kullanıcı yönetimi
├── auth/               # Kimlik doğrulama
├── courses/            # Ders yönetimi
├── payments/           # Ödeme takibi
└── notifications/      # Bildirim sistemi

Her modül içerisinde:
├── dto/               # Veri transfer objeleri
├── entities/          # Veritabanı modelleri
├── controllers/       # API endpoint'leri
└── services/         # İş mantığı
```

## Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- PostgreSQL (v14 veya üzeri)
- npm veya yarn

### Adımlar

1. Projeyi klonlayın
```bash
git clone https://github.com/your-username/kst.git
cd kst
```

2. Bağımlılıkları yükleyin
```bash
npm install
```

3. Ortam değişkenlerini ayarlayın
```bash
cp .env.example .env
# .env dosyasını düzenleyin
```

4. Veritabanını oluşturun
```bash
# PostgreSQL'de veritabanı oluşturun
createdb kst_db
```

5. Uygulamayı çalıştırın
```bash
# Geliştirme modu
npm run start:dev

# Production modu
npm run build
npm run start:prod
```

## Ortam Değişkenleri

```env
# Uygulama
PORT=3000
NODE_ENV=development

# Veritabanı
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=postgres
DB_DATABASE=kst_db
```

## Mevcut Bağımlılıklar

```json
{
  "@nestjs/common": "^10.0.0",
  "@nestjs/config": "^3.2.0",
  "@nestjs/core": "^10.0.0",
  "@nestjs/platform-express": "^10.0.0",
  "@nestjs/typeorm": "^10.0.2",
  "class-transformer": "^0.5.1",
  "class-validator": "^0.14.1",
  "pg": "^8.11.3",
  "typeorm": "^0.3.20"
}
```

## Lisans

Bu proje [MIT lisansı](LICENSE) ile lisanslanmıştır.
