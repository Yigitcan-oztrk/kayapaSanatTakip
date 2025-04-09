# KST (Kayapa Sanat Takip) API

Bu proje, Kayapa Sanat Akademisi için geliştirilmiş bir yönetim sistemi API'sidir. Sistem, öğrenci takibi, ders programı yönetimi, ödeme takibi ve bildirim yönetimi gibi özellikleri içerecektir.

## Proje Durumu

### Tamamlanan Adımlar

1. Temel Proje Yapısı
   - NestJS projesi oluşturuldu
   - TypeScript yapılandırması tamamlandı
   - Git yapılandırması (.gitignore) tamamlandı
   - Temel bağımlılıklar yüklendi

2. Veritabanı Yapılandırması
   - PostgreSQL için Docker container yapılandırıldı
   - Prisma ORM entegrasyonu yapıldı
   - Temel veritabanı modelleri oluşturuldu

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

1. Veritabanı İlişkileri
   - [ ] User-Course ilişkisi
   - [ ] User-Payment ilişkisi
   - [ ] User-Notification ilişkisi

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

## Kurulum

### Gereksinimler

- Node.js (v18 veya üzeri)
- Docker ve Docker Compose
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

4. Docker container'ını başlatın
```bash
docker-compose up -d
```

5. Veritabanı migration'larını çalıştırın
```bash
npx prisma migrate dev
```

6. Uygulamayı çalıştırın
```bash
# Geliştirme modu
npm run start:dev

# Production modu
npm run build
npm run start:prod
```

## Veritabanı Yapılandırması

### Docker ile PostgreSQL

```bash
# Veritabanını başlatma
docker-compose up -d

# Veritabanını durdurma
docker-compose down

# Veritabanını ve volume'ları silme (temiz başlangıç için)
docker-compose down -v
```

### Veritabanı Bağlantı Bilgileri

- Host: localhost
- Port: 5432
- Database: kst_db
- Username: johndoe
- Password: 123456

### Prisma ORM

#### Prisma Komutları

```bash
# Şema değişikliklerini veritabanına uygulama
npx prisma migrate dev

# Sadece production ortamında migration'ları uygulama
npx prisma migrate deploy

# Prisma Client'ı güncelleme
npx prisma generate

# Veritabanı GUI'sini açma
npx prisma studio
```

#### Veritabanı Modelleri

- **User**: Kullanıcı yönetimi (öğrenci, öğretmen, veli, admin)
- **Course**: Ders ve program yönetimi
- **Payment**: Ödeme takibi
- **Notification**: Bildirim sistemi

## Lisans

Bu proje [MIT lisansı](LICENSE) ile lisanslanmıştır.
