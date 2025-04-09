# API Dokümantasyonu

## Kimlik Doğrulama Endpointleri

### Öğrenci Kaydı (Sadece Admin)
**Endpoint:** `POST /auth/register/student`

**İstek Gövdesi:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "tc": "string",
  "phoneNumber": "string"
}
```

**Başarılı Yanıt (201):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "firstName": "string",
    "lastName": "string",
    "tc": "string",
    "phoneNumber": "string",
    "role": "STUDENT",
    "status": "ACTIVE",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
  "message": "Öğrenci başarıyla kaydedildi"
}
```

**Hata Yanıtları:**
- `400 Bad Request`: Geçersiz giriş verileri
- `409 Conflict`: TC veya telefon numarası zaten kayıtlı
```json
{
  "success": false,
  "message": "Hata mesajı",
  "error": {
    "statusCode": 400/409,
    "details": ["Spesifik doğrulama hataları"]
  }
}
```

### Öğrenci Girişi
**Endpoint:** `POST /auth/login/student`

**İstek Gövdesi:**
```json
{
  "phoneNumber": "string",
  "password": "string"
}
```

**Başarılı Yanıt (200):**
```json
{
  "success": true,
  "data": {
    "access_token": "string",
    "user": {
      "id": "number",
      "firstName": "string",
      "lastName": "string",
      "phoneNumber": "string",
      "role": "STUDENT",
      "status": "ACTIVE"
    }
  },
  "message": "Giriş başarılı"
}
```

**Hata Yanıtları:**
- `401 Unauthorized`: Geçersiz kimlik bilgileri
```json
{
  "success": false,
  "message": "Geçersiz telefon numarası veya şifre",
  "error": {
    "statusCode": 401
  }
}
```

## Kullanıcı Yönetimi Endpointleri

### Kullanıcı Profili Görüntüleme
**Endpoint:** `GET /users/profile`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Başarılı Yanıt (200):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "firstName": "string",
    "lastName": "string",
    "tc": "string",
    "phoneNumber": "string",
    "role": "STUDENT",
    "status": "ACTIVE",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  }
}
```

**Hata Yanıtları:**
- `401 Unauthorized`: Geçersiz veya eksik token
- `404 Not Found`: Kullanıcı bulunamadı

### Kullanıcı Profili Güncelleme
**Endpoint:** `PATCH /users/profile`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**İstek Gövdesi:**
```json
{
  "firstName": "string",
  "lastName": "string",
  "phoneNumber": "string"
}
```

**Başarılı Yanıt (200):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "firstName": "string",
    "lastName": "string",
    "phoneNumber": "string",
    "updatedAt": "timestamp"
  },
  "message": "Profil başarıyla güncellendi"
}
```

**Hata Yanıtları:**
- `401 Unauthorized`: Geçersiz veya eksik token
- `400 Bad Request`: Geçersiz giriş verileri
- `409 Conflict`: Telefon numarası zaten kayıtlı

## Yapılacaklar Listesi Endpointleri

### Yapılacak Oluşturma
**Endpoint:** `POST /todos`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**İstek Gövdesi:**
```json
{
  "title": "string"
}
```

**Başarılı Yanıt (201):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "title": "string",
    "completed": false,
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
  "message": "Yapılacak başarıyla oluşturuldu"
}
```

### Tüm Yapılacakları Listeleme
**Endpoint:** `GET /todos`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Sorgu Parametreleri:**
- `completed` (opsiyonel): Tamamlanma durumuna göre filtreleme (true/false)
- `page` (opsiyonel): Sayfa numarası (varsayılan: 1)
- `limit` (opsiyonel): Sayfa başına öğe sayısı (varsayılan: 10)

**Başarılı Yanıt (200):**
```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "number",
        "title": "string",
        "completed": "boolean",
        "createdAt": "timestamp",
        "updatedAt": "timestamp"
      }
    ],
    "meta": {
      "total": "number",
      "page": "number",
      "lastPage": "number"
    }
  }
}
```

### Yapılacak Güncelleme
**Endpoint:** `PATCH /todos/:id`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**İstek Gövdesi:**
```json
{
  "title": "string",
  "completed": "boolean"
}
```

**Başarılı Yanıt (200):**
```json
{
  "success": true,
  "data": {
    "id": "number",
    "title": "string",
    "completed": "boolean",
    "updatedAt": "timestamp"
  },
  "message": "Yapılacak başarıyla güncellendi"
}
```

### Yapılacak Silme
**Endpoint:** `DELETE /todos/:id`

**Headers:**
```
Authorization: Bearer {accessToken}
```

**Başarılı Yanıt (200):**
```json
{
  "success": true,
  "message": "Yapılacak başarıyla silindi"
}
```

## Genel Bilgiler

### Hata İşleme
Tüm endpointler tutarlı bir hata yanıt formatı kullanır:
```json
{
  "success": false,
  "message": "Hata açıklaması",
  "error": {
    "statusCode": "number",
    "details": ["Hata detayları dizisi"]
  }
}
```

### Genel Durum Kodları
- `200`: Başarılı işlem
- `201`: Kaynak oluşturuldu
- `400`: Geçersiz istek / Doğrulama hatası
- `401`: Yetkisiz erişim
- `403`: Erişim engellendi
- `404`: Kaynak bulunamadı
- `409`: Çakışma
- `422`: İşlenemeyen varlık
- `500`: Sunucu hatası

### Kimlik Doğrulama
- Tüm korumalı endpointler Authorization header'ında geçerli bir JWT token gerektirir
- Token formatı: `Bearer {token}`
- Tokenlar giriş endpointi üzerinden alınır
- Tokenlar 24 saat sonra geçerliliğini yitirir

### İstek Doğrulama
- Tüm istek gövdeleri class-validator kullanılarak doğrulanır
- Zorunlu alanlar mutlaka sağlanmalıdır
- String alanlar minimum ve maksimum uzunluk gereksinimlerine sahiptir
- TC kimlik numarası 11 haneli olmalıdır
- Telefon numaraları 5xx xxx xx xx formatında olmalıdır

### Yanıt Formatı
Tüm yanıtlar tutarlı bir format kullanır:
```json
{
  "success": "boolean",
  "data": "object | null",
  "message": "string | null",
  "error": "object | null"
}
``` 