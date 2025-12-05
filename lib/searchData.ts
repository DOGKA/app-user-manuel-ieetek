// @ts-nocheck
// Search index for content search

export interface SearchItem {
  id: string
  sectionId: string
  title: string
  content: string
  keywords: string[]
}

export const searchIndex: SearchItem[] = [
  // Sorumluluk Reddi
  {
    id: 'disclaimer-1',
    sectionId: 'disclaimer',
    title: 'Sorumluluk Reddi Beyanı',
    content: 'Bu ürünü kullanmadan önce, ürünü tam olarak anladığınızdan ve doğru şekilde kullanabileceğinizden emin olmak için lütfen bu kullanım kılavuzunu dikkatli bir şekilde okuyun.',
    keywords: ['sorumluluk', 'uyarı', 'kılavuz', 'kullanım', 'önemli']
  },
  {
    id: 'disclaimer-2',
    sectionId: 'disclaimer',
    title: 'Yasal Bilgiler',
    content: 'Belgedeki tüm şartlar ve içerikler kullanıcı hatalarına karşı sorumluluğumuzu ortadan kaldırmaktadır. Ürünü bu kullanıcı kılavuzuna uygun olarak kullanmamanız nedeniyle meydana gelen herhangi bir zarardan sorumlu değiliz.',
    keywords: ['yasal', 'şartlar', 'sorumluluk', 'zarar', 'hata']
  },

  // Uygulama Kurulumu
  {
    id: 'app-install-1',
    sectionId: 'app-install',
    title: 'Uygulama Kurulumu',
    content: 'App Store veya Google Play Store\'dan Landbook veya Wonderfree uygulamasını aratın ve indirin. QR kod ile de indirebilirsiniz.',
    keywords: ['kurulum', 'indirme', 'app store', 'google play', 'landbook', 'wonderfree', 'qr kod']
  },
  {
    id: 'app-install-2',
    sectionId: 'app-install',
    title: 'QR Kod ile İndirme',
    content: 'QR Kodu okutarak uygulamayı doğrudan indirebilirsiniz. iOS için App Store, Android için Google Play Store.',
    keywords: ['qr', 'kod', 'tarama', 'indirme', 'ios', 'android']
  },

  // Kayıt ve Giriş
  {
    id: 'app-register-1',
    sectionId: 'app-register',
    title: 'Hesap Oluşturma',
    content: 'Uygulamayı açın ve Kayıt Ol butonuna tıklayın. E-posta adresinizi girin ve doğrulama kodunu alın. Şifrenizi belirleyin ve hesabınızı oluşturun.',
    keywords: ['kayıt', 'hesap', 'e-posta', 'doğrulama', 'şifre', 'oluşturma']
  },
  {
    id: 'app-register-2',
    sectionId: 'app-register',
    title: 'Giriş Yapma',
    content: 'E-posta ve şifrenizle giriş yapın. Şifrenizi unuttuysanız Şifremi Unuttum seçeneğini kullanın.',
    keywords: ['giriş', 'login', 'şifre', 'e-posta', 'unutma']
  },

  // Cihaz Bağlama
  {
    id: 'device-connect-1',
    sectionId: 'device-connect',
    title: 'WiFi Aktifleştirme',
    content: 'Güç istasyonu açıldığında, güç istasyonunun panelindeki IOT deliğine bir iğne ile basın ve bir Bip sesi duyana kadar basılı tutun. LCD ekrandaki ağ yapılandırma simgesi yanıp sönmeye başlayacaktır.',
    keywords: ['wifi', 'bağlantı', 'iot', 'iğne', 'bip', 'lcd', 'ağ']
  },
  {
    id: 'device-connect-2',
    sectionId: 'device-connect',
    title: 'P Serisi WiFi Aktifleştirme',
    content: 'P serisi için DC BUTONU ve LED IŞIK BUTONUNA aynı anda basarak WiFi aktif edebilirsiniz.',
    keywords: ['p serisi', 'dc', 'led', 'buton', 'wifi', 'aktif']
  },
  {
    id: 'device-connect-3',
    sectionId: 'device-connect',
    title: 'Cihaz Ekleme',
    content: 'Sayfanın sağ üst köşesindeki + simgesine tıklayın ve Yakındaki Cihazları Tespit Et seçeneğini seçin. Uygulama, yakındaki eklenebilir cihazları gösterecektir.',
    keywords: ['cihaz', 'ekleme', 'tespit', 'yakın', 'bluetooth']
  },
  {
    id: 'device-connect-4',
    sectionId: 'device-connect',
    title: 'WiFi Yapılandırması',
    content: 'Cihazınızı bulduktan sonra WiFi ağınızı seçin ve şifrenizi girin. Cihaz ağa bağlanacaktır.',
    keywords: ['wifi', 'şifre', 'ağ', 'yapılandırma', 'bağlantı']
  },

  // Cihaz Kontrolleri
  {
    id: 'device-controls-1',
    sectionId: 'device-controls',
    title: 'Ana Kontrol Paneli',
    content: 'Cihaz ana ekranından batarya seviyesi, giriş/çıkış güç değerleri, AC/DC çıkış kontrolü ve daha fazlasını görebilirsiniz.',
    keywords: ['kontrol', 'panel', 'batarya', 'güç', 'ac', 'dc', 'çıkış']
  },
  {
    id: 'device-controls-2',
    sectionId: 'device-controls',
    title: 'AC/DC Kontrolü',
    content: 'AC ve DC çıkışlarını uygulama üzerinden açıp kapatabilirsiniz. Güç değerlerini anlık olarak takip edebilirsiniz.',
    keywords: ['ac', 'dc', 'çıkış', 'kontrol', 'açma', 'kapatma']
  },
  {
    id: 'device-controls-3',
    sectionId: 'device-controls',
    title: 'Batarya İzleme',
    content: 'Batarya doluluk oranı, kalan süre, şarj durumu gibi bilgileri anlık olarak izleyebilirsiniz.',
    keywords: ['batarya', 'şarj', 'doluluk', 'süre', 'izleme']
  },

  // Diğer Fonksiyonlar
  {
    id: 'other-functions-1',
    sectionId: 'other-functions',
    title: 'Ses Kontrolü',
    content: 'Cihazın bip sesini açıp kapatabilirsiniz. Ayarlar menüsünden ses tercihlerinizi yapabilirsiniz.',
    keywords: ['ses', 'bip', 'kontrol', 'sessiz', 'ayar']
  },
  {
    id: 'other-functions-2',
    sectionId: 'other-functions',
    title: 'Firmware Güncelleme',
    content: 'Cihazınızın firmware sürümünü kontrol edebilir ve yeni güncellemeleri yükleyebilirsiniz.',
    keywords: ['firmware', 'güncelleme', 'sürüm', 'yazılım', 'update']
  },

  // Paylaşma / Silme
  {
    id: 'device-share-1',
    sectionId: 'device-share',
    title: 'Cihaz Paylaşma',
    content: 'Cihazınızı aile üyeleri veya arkadaşlarınızla paylaşabilirsiniz. Paylaşılan kişiler cihazı kontrol edebilir.',
    keywords: ['paylaşma', 'aile', 'arkadaş', 'erişim', 'izin']
  },
  {
    id: 'device-share-2',
    sectionId: 'device-share',
    title: 'Cihaz Silme',
    content: 'Cihazı hesabınızdan kaldırabilirsiniz. Cihazı sildikten sonra yeniden eklemeniz gerekecektir.',
    keywords: ['silme', 'kaldırma', 'çıkarma', 'hesap']
  },

  // Senaryo Kurma
  {
    id: 'scenario-1',
    sectionId: 'scenario',
    title: 'Senaryo Oluşturma',
    content: 'Tek dokunuşla birden fazla işlemi gerçekleştiren senaryolar oluşturabilirsiniz. Örneğin tüm çıkışları aynı anda açma veya kapatma.',
    keywords: ['senaryo', 'otomasyon', 'tek dokunuş', 'işlem', 'otomatik']
  },
  {
    id: 'scenario-2',
    sectionId: 'scenario',
    title: 'Senaryo Düzenleme',
    content: 'Mevcut senaryolarınızı düzenleyebilir, silebilir veya yeni senaryolar ekleyebilirsiniz.',
    keywords: ['senaryo', 'düzenleme', 'silme', 'ekleme']
  },

  // Otomasyon
  {
    id: 'automation-1',
    sectionId: 'automation',
    title: 'Zamanlama',
    content: 'Belirli saatlerde cihazın otomatik olarak açılıp kapanmasını ayarlayabilirsiniz. Günlük veya haftalık tekrarlayan zamanlamalar oluşturabilirsiniz.',
    keywords: ['zamanlama', 'otomatik', 'saat', 'program', 'tekrar']
  },
  {
    id: 'automation-2',
    sectionId: 'automation',
    title: 'Koşullu Otomasyon',
    content: 'Batarya seviyesine göre otomatik işlemler tanımlayabilirsiniz. Örneğin batarya %20 altına düşünce bildirim alma.',
    keywords: ['koşul', 'otomasyon', 'batarya', 'seviye', 'bildirim']
  },

  // Toplu Kontrol
  {
    id: 'group-control-1',
    sectionId: 'group-control',
    title: 'Cihaz Grupları',
    content: 'Birden fazla cihazı gruplandırarak toplu kontrol edebilirsiniz. Tüm cihazları tek seferde açıp kapatabilirsiniz.',
    keywords: ['grup', 'toplu', 'kontrol', 'çoklu', 'cihaz']
  },

  // Sistem Ayarları
  {
    id: 'system-settings-1',
    sectionId: 'system-settings',
    title: 'Hesap Ayarları',
    content: 'Profil bilgilerinizi düzenleyebilir, şifrenizi değiştirebilir ve bildirim tercihlerinizi ayarlayabilirsiniz.',
    keywords: ['hesap', 'profil', 'şifre', 'bildirim', 'ayar']
  },
  {
    id: 'system-settings-2',
    sectionId: 'system-settings',
    title: 'Uygulama Ayarları',
    content: 'Dil seçimi, tema, bildirim ayarları ve önbellek temizleme gibi uygulama ayarlarını yapabilirsiniz.',
    keywords: ['dil', 'tema', 'bildirim', 'önbellek', 'ayar', 'uygulama']
  },
  {
    id: 'system-settings-3',
    sectionId: 'system-settings',
    title: 'Yardım ve Destek',
    content: 'SSS, kullanım videoları ve müşteri desteği ile iletişim bilgilerine ulaşabilirsiniz.',
    keywords: ['yardım', 'destek', 'sss', 'iletişim', 'video']
  },
]

export function searchContent(query: string): SearchItem[] {
  if (!query.trim()) return []
  
  const lowerQuery = query.toLowerCase().trim()
  const words = lowerQuery.split(/\s+/)
  
  return searchIndex.filter(item => {
    const titleMatch = item.title.toLowerCase().includes(lowerQuery)
    const contentMatch = item.content.toLowerCase().includes(lowerQuery)
    const keywordMatch = item.keywords.some(keyword => 
      keyword.toLowerCase().includes(lowerQuery) || 
      words.some(word => keyword.toLowerCase().includes(word))
    )
    
    return titleMatch || contentMatch || keywordMatch
  }).slice(0, 8) // Limit to 8 results
}

export function getSectionTitle(sectionId: string): string {
  const sectionTitles: Record<string, string> = {
    'disclaimer': 'Sorumluluk Reddi',
    'app-install': 'Uygulama Kurulumu',
    'app-register': 'Kayıt ve Giriş',
    'device-connect': 'Cihaz Bağlama',
    'device-controls': 'Cihaz Kontrolleri',
    'other-functions': 'Diğer Fonksiyonlar',
    'device-share': 'Paylaşma / Silme',
    'scenario': 'Senaryo Kurma',
    'automation': 'Otomasyon',
    'group-control': 'Toplu Kontrol',
    'system-settings': 'Sistem Ayarları',
  }
  return sectionTitles[sectionId] || sectionId
}

