// @ts-nocheck
'use client'

import React, { useState, useEffect } from 'react'
import Hero from '@/components/Hero'
import Navigation from '@/components/Navigation'
import Section from '@/components/Section'
import ImageGallery from '@/components/ImageGallery'
import StepGuide from '@/components/StepGuide'
import InfoCard from '@/components/InfoCard'
import FeatureCard from '@/components/FeatureCard'
import ParameterTable from '@/components/ParameterTable'
import {
  WarningIcon,
  DownloadIcon,
  PlugIcon,
  SettingsIcon,
  AutomationIcon,
  GroupIcon,
  BatteryIcon,
  VolumeIcon,
  TrashIcon,
  InfoIcon,
} from '@/components/icons'

export default function Home() {
  const [activeSection, setActiveSection] = useState('disclaimer')
  const [showHero, setShowHero] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      setShowHero(window.scrollY < heroHeight - 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <main className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <Hero />

      {/* Navigation - appears after scrolling past hero */}
      <div className={`transition-opacity duration-500 ${showHero ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
        <Navigation activeSection={activeSection} onSectionClick={scrollToSection} />
      </div>

      {/* Main Content */}
      <div id="content" className="relative">
        <div className="md:ml-72 lg:ml-80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

            {/* Section 1: Disclaimer */}
            <Section
              id="disclaimer"
              title="Sorumluluk Reddi Beyanı"
              icon={<WarningIcon size={24} />}
            >
              <div className="space-y-4 text-slate-300 leading-relaxed">
                <InfoCard type="warning" title="Önemli Uyarı">
                  Bu ürünü kullanmadan önce, ürünü tam olarak anladığınızdan ve doğru şekilde kullanabileceğinizden emin olmak için lütfen bu kullanım kılavuzunu dikkatli bir şekilde okuyun.
                </InfoCard>

                <p>
                  Kılavuzu okuduktan sonra, gelecekte başvurmak üzere güvenli bir yerde saklayın. Bu ürünü yanlış kullanmanız, kendinize veya başkalarına ciddi şekilde zarar verebilir ya da ürün hasarına ve mal kaybına neden olabilir.
                </p>

                <p>
                  Bu ürünü kullanarak, bu belgede yer alan tüm şartları ve içerikleri anladığınız, tanıdığınız ve kabul ettiğiniz varsayılmaktadır.
                </p>

                <div className="glass rounded-xl p-6 mt-6">
                  <h4 className="font-semibold text-white mb-4">Yasal Bilgiler</h4>
                  <ul className="space-y-3 text-sm text-slate-400">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                      Belgedeki tüm şartlar ve içerikler kullanıcı hatalarına karşı sorumluluğumuzu ortadan kaldırmaktadır.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                      Ürünü bu kullanıcı kılavuzuna uygun olarak kullanmamanız nedeniyle meydana gelen herhangi bir zarardan sorumlu değiliz.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                      Bu belge ve ürünle ilgili tüm belgelerin nihai yorum hakkını saklı tutuyoruz.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2" />
                      Bu belge, bildirim yapılmadan değişikliğe (güncelleme, revizyon veya sona erdirme) tabi olabilir.
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* Section 2: Installation */}
            <Section
              id="installation"
              title="Kurulum, Kayıt ve Giriş"
              subtitle="Uygulamayı cihazınıza kurun ve hesap oluşturun."
              icon={<DownloadIcon size={24} />}
            >
              {/* App Installation */}
              <div id="app-install" className="scroll-mt-24">
                <h3 className="text-2xl font-bold text-white mb-6">Uygulama Kurulumu</h3>
                
                <p className="text-slate-300 mb-6">
                  Kullanıcı deneyimini geliştirmek için, uygulama sunucu konumuna göre iki kategoriye ayrılmıştır:
                </p>

                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  <FeatureCard
                    icon={<span className="text-2xl font-bold">L</span>}
                    title="Landbook"
                    description="ABD/Kanada kullanıcıları için"
                    items={['App Store\'dan indirin', 'Google Play\'den indirin']}
                  />
                  <FeatureCard
                    icon={<span className="text-2xl font-bold">W</span>}
                    title="Wonderfree"
                    description="Diğer bölgeler için"
                    items={['App Store\'dan indirin', 'Google Play\'den indirin']}
                  />
                </div>

                <h4 className="text-lg font-semibold text-white mb-4">iOS Kullanıcıları</h4>
                <p className="text-slate-400 mb-4">
                  App Store&apos;u açın, ilgili uygulamayı arayın (ABD/Kanada için &quot;Landbook&quot;, diğer bölgeler için &quot;Wonderfree&quot;), uygulamayı indirin ve kurun.
                </p>

                <ImageGallery
                  images={[
                    { src: 'landbook.png', alt: 'Landbook App Store', caption: 'Landbook - App Store' },
                    { src: 'wonderfree.png', alt: 'Wonderfree App Store', caption: 'Wonderfree - App Store' },
                  ]}
                  layout="vertical"
                />

                <h4 className="text-lg font-semibold text-white mb-4 mt-8">Android Kullanıcıları</h4>
                <p className="text-slate-400 mb-4">
                  Google Play Store&apos;u açın, uygun uygulamayı arayın, indirin ve kurun.
                </p>
              </div>

              {/* App Registration */}
              <div id="app-register" className="scroll-mt-24 mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Uygulama Kaydı ve Girişi</h3>

                <StepGuide
                  steps={[
                    {
                      number: 1,
                      title: 'Kayıt İşlemini Başlatın',
                      description: 'Uygulamaya ilk kez giriş yaptığınızda, e-posta ile kayıt olmanız gerekmektedir. Kayıt işlemini başlatmak için sağ üst köşedeki "Kayıt Ol" butonuna tıklayın.',
                      images: [
                        { src: 'welcome-to-use-landbook.png', alt: 'Landbook Hoşgeldiniz', caption: 'Landbook Giriş' },
                        { src: 'welcome-to-use-wonderfree.png', alt: 'Wonderfree Hoşgeldiniz', caption: 'Wonderfree Giriş' },
                      ],
                    },
                    {
                      number: 2,
                      title: 'Kayıt Bilgilerini Girin',
                      description: 'Uygun ülkeyi veya bölgeyi seçin, e-posta adresinizi girin, e-postanıza gelen kodu doldurun ve şifre belirleyerek kaydı tamamlayın.',
                      images: [
                        { src: 'landbook-register-1.png', alt: 'Landbook Kayıt', caption: 'Landbook Kayıt Ekranı' },
                        { src: 'lwonderfree-register-1.png', alt: 'Wonderfree Kayıt', caption: 'Wonderfree Kayıt Ekranı' },
                      ],
                    },
                    {
                      number: 3,
                      title: 'Cihaz Listesine Erişin',
                      description: 'Başarılı giriş yaptıktan sonra, uygulama cihaz listesi arayüzünü görüntüler.',
                      images: [
                        { src: 'device-list.png', alt: 'Cihaz Listesi', caption: 'Ana Ekran - Cihaz Listesi' },
                      ],
                    },
                  ]}
                />

                <InfoCard type="info" title="Önemli">
                  Kayıt sonrasında, giriş yaparken seçilen ülke, kayıt sırasında seçilen ülke ile eşleşmelidir.
                </InfoCard>
              </div>
            </Section>

            {/* Section 3: Connection & Usage */}
            <Section
              id="connection"
              title="Bağlantı, Yapılandırma ve Kullanım"
              subtitle="Cihazınızı uygulamaya bağlayın ve kontrol edin."
              icon={<PlugIcon size={24} />}
            >
              {/* Device Connection */}
              <div id="device-connect" className="scroll-mt-24">
                <h3 className="text-2xl font-bold text-white mb-6">Uygulamayı Cihaza Bağlama</h3>

                <InfoCard type="warning" title="Bağlantı Gereksinimleri">
                  Kullanım sırasında, uygulamanın Bluetooth ve WiFi gerektirdiğini unutmayın. Lütfen mobil telefonunuzun Bluetooth ve WiFi&apos;sının açık olduğundan emin olun ve uygulamanın kullanım sırasında konum bilginize erişmesine izin verin.
                </InfoCard>

                <StepGuide
                  steps={[
                    {
                      number: 1,
                      title: 'Güç İstasyonunu Hazırlayın',
                      description: (
                        <>
                          <p className="mb-3">Güç istasyonu açıldığında, güç istasyonunun panelindeki "IOT" deliğine bir iğne ile basın ve bir "Bip" sesi duyana kadar basılı tutun. LCD ekrandaki ağ yapılandırma simgesi yanıp sönmeye başlayacaktır.</p>
                          <InfoCard type="tip" title="P Serisi İçin">
                            <strong>DC BUTONU</strong> ve <strong>LED IŞIK BUTONUNA</strong> aynı anda basarak WiFi aktif edebilirsiniz.
                          </InfoCard>
                        </>
                      ),
                      images: [
                        { src: 'wifi-aktif-etme.png', alt: 'WiFi Aktifleştirme', caption: 'IOT Düğmesine Basın' },
                      ],
                    },
                    {
                      number: 2,
                      title: 'Yakındaki Cihazları Tespit Edin',
                      description: 'Sayfanın sağ üst köşesindeki "+" simgesine tıklayın ve "Yakındaki Cihazları Tespit Et" seçeneğini seçin. Uygulama, yakındaki eklenebilir cihazları gösterecektir.',
                      images: [
                        { src: 'device-list-press-plus-button.png', alt: 'Artı Butonu', caption: '+ Butonuna Tıklayın' },
                        { src: 'detect-nearby-device.png', alt: 'Cihaz Tespit', caption: 'Yakındaki Cihazları Tespit Et' },
                      ],
                    },
                    {
                      number: 3,
                      title: 'WiFi Bilgilerini Girin',
                      description: 'Taşınabilir güç istasyonunun bağlanmasını istediğiniz WiFi hesabını ve şifresini girin, ardından "İleri" seçeneğini seçin.',
                      images: [
                        { src: 'select-your-device.png', alt: 'Cihaz Seçimi', caption: 'Cihazınızı Seçin' },
                        { src: 'select-wifi-enter-password.png', alt: 'WiFi Şifre', caption: 'WiFi Bilgilerini Girin' },
                        { src: 'select-wifi-enter-password-next.png', alt: 'İleri', caption: 'İleri Butonuna Tıklayın' },
                      ],
                    },
                    {
                      number: 4,
                      title: 'Yapılandırmayı Tamamlayın',
                      description: 'Başarılı yapılandırmadan sonra, arayüz ürün cihazlarını gösterecektir. "Tamamlandı" seçeneğine tıklayın, ardından cihaz listesine geri dönmek için "Kaydet"e tıklayın.',
                      images: [
                        { src: 'selected-device-done.png', alt: 'Cihaz Tamamlandı', caption: 'Yapılandırma Tamamlandı' },
                        { src: 'add-device-done.png', alt: 'Ekleme Tamamlandı', caption: 'Cihaz Eklendi' },
                      ],
                    },
                  ]}
                />

                <InfoCard type="tip" title="İpucu">
                  <ul className="space-y-2">
                    <li>• Uygulama uzun süre boyunca cihazı bulamazsa veya bağlantı başarısız olursa, yukarıdaki adımları tekrar edin.</li>
                    <li>• Tekrar tekrar başarısız olursanız, teknik destek için resmi müşteri hizmetleri ile iletişime geçin.</li>
                  </ul>
                </InfoCard>

                <InfoCard type="success" title="Başarılı Bağlantı Sonrası">
                  <ul className="space-y-2">
                    <li>① Taşınabilir güç istasyonu kapatılıp yeniden başlatıldığında, yeniden yapılandırmaya gerek yoktur. Sadece uygulamayı açın ve cihazın tekrar çevrimiçi olmasını bekleyin.</li>
                    <li>② LCD ekrandaki ağ yapılandırma simgesi bağlantı durumunu gösterir: Yanıp sönme = bağlantı bekliyor, Sabit ışık = bağlı.</li>
                  </ul>
                </InfoCard>
              </div>

              {/* Device Controls */}
              <div id="device-controls" className="scroll-mt-24 mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Cihaz Kontrolleri ve Ana Fonksiyonlar</h3>

                <p className="text-slate-300 mb-6">
                  Başarıyla bağlanan cihazın simgesine tıklayarak cihaz kontrol arayüzüne girin.
                </p>

                <ImageGallery
                  images={[
                    { src: 'cihaz-kontrol-1.png', alt: 'Cihaz Kontrol', caption: 'Cihaz Kontrol Paneli' },
                  ]}
                  layout="single"
                />

                <h4 className="text-xl font-semibold text-white mt-10 mb-4">Giriş Parametreleri Paneli</h4>
                
                <ImageGallery
                  images={[
                    { src: 'giriş-parametre-paneli.png', alt: 'Giriş Parametreleri', caption: 'Giriş Parametreleri' },
                  ]}
                  layout="single"
                />

                <ParameterTable
                  parameters={[
                    { number: '①', name: 'Kalan Güç', description: 'Cihazın pil gücünün kalan yüzdesi.' },
                    { number: '②', name: 'Kalan Kullanılabilir Süre', description: 'Mevcut çıkış gücündeki kalan pil ile güç istasyonunun teorik olarak kullanılabileceği süre.' },
                    { number: '③', name: 'Pil Sıcaklığı', description: 'Pilin sıcaklığı.' },
                    { number: '④', name: 'Giriş Gücü', description: 'Toplam pil şarj gücü, AC şarj gücü ve DC şarj gücü dahil.' },
                  ]}
                />

                <h4 className="text-xl font-semibold text-white mt-10 mb-4">Çıkış Kontrol Paneli</h4>

                <ImageGallery
                  images={[
                    { src: 'cikis-kontrol-paneli.png', alt: 'Çıkış Kontrol Paneli', caption: 'Çıkış Kontrol Paneli' },
                  ]}
                  layout="single"
                />

                <ParameterTable
                  parameters={[
                    { number: '①', name: 'Çıkış Gücü', description: 'Pilin harici cihazlara sağladığı toplam güç (AC, DC, USB, Type-C).' },
                    { number: '②', name: 'AC Bilgisi', description: 'AC çıkış gücünü görüntülemek için AC çıkış anahtarı.' },
                    { number: '③', name: 'DC Bilgisi', description: 'DC çıkış gücünü görüntülemek için DC çıkış anahtarı.' },
                    { number: '④', name: 'USB Bilgisi', description: 'USB portunun çıkış gücünü gösterir.' },
                    { number: '⑤', name: 'Type-C Bilgisi', description: 'Type-C bağlantı noktasının çıkış gücünü gösterir.' },
                    { number: '⑥', name: 'LED', description: 'LED ışık anahtarı (Üç mod: Parıltı/Yüksek Işık/SOS).' },
                  ]}
                />
              </div>

              {/* Other Functions */}
              <div id="other-functions" className="scroll-mt-24 mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Cihazın Diğer Fonksiyonları</h3>

                <p className="text-slate-300 mb-6">
                  Panelin altındaki &quot;Diğer&quot; butonuna tıklayarak yardımcı fonksiyon arayüzüne girin.
                </p>

                <ImageGallery
                  images={[
                    { src: 'cihazın-diger-fonksiyonları.png', alt: 'Diğer Fonksiyonlar', caption: 'Diğer Fonksiyonlar Menüsü' },
                    { src: 'erisebilirlik-kontrol-paneli.png', alt: 'Erişebilirlik Paneli', caption: 'Erişebilirlik Kontrol Paneli' },
                  ]}
                  layout="vertical"
                />

                <ParameterTable
                  title="Erişebilirlik Kontrol Paneli"
                  parameters={[
                    { number: '①', name: 'LCD Kapalı Süresi', description: 'Cihazın dinlenme süresini ayarlama (0~24 saat).' },
                    { number: '②', name: 'Çıkış Frekans Ayarı', description: '50~60HZ frekans otomatik geçişi.' },
                    { number: '③', name: 'Çıkış Voltaj Ayarı', description: '110V cihazlar için: 100V/110V/120V. 220V cihazlar için: 220V/230V/240V.' },
                    { number: '④', name: 'Maksimum AC Şarj Gücü', description: 'AC şarj gücü üst sınırını ayarlama (0~100%).' },
                    { number: '⑤', name: 'Soğutma Fanı Düğmesi', description: 'Fanı açma/kapatma.' },
                    { number: '⑥', name: 'Smart Drive Modu', description: 'Sabit güç modunu açma/kapatma.' },
                    { number: '⑦', name: 'Yavaş Şarj', description: 'Yavaş şarjı açma/kapatma.' },
                    { number: '⑧', name: 'Bekleme Süresi', description: 'Cihazın bekleme süresini ayarlama.' },
                    { number: '⑨', name: 'Ambiyans Işığı', description: 'Ortam ışığını açma/kapatma veya modunu seçme.' },
                    { number: '⑩', name: 'Buzzer Düğmesi', description: 'Cihazın çalışma "bip" sesini açma/kapatma.' },
                    { number: '⑪', name: 'Otomatik Bypass Çıkışı', description: 'Bypass modunu açma/kapatma.' },
                    { number: '⑫', name: 'Cihaz Anahtarı', description: 'Cihaz DK Kodu.' },
                  ]}
                />
              </div>

              {/* Device Share/Delete */}
              <div id="device-share" className="scroll-mt-24 mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Cihazı Paylaşma / Silme</h3>

                <StepGuide
                  steps={[
                    {
                      number: 1,
                      title: 'Paylaşım QR Kodunu Gösterin',
                      description: 'Mobil telefonunuz cihaza başarıyla bağlandıktan sonra, cihazı diğer mobil telefon kullanıcılarıyla paylaşabilirsiniz. Cihaz simgesine uzun basın ve paylaşım QR kodunu göstermek için "Paylaş" butonuna tıklayın.',
                      images: [
                        { src: 'cihaz-paylasimi-qr-1.png', alt: 'QR Paylaşım 1', caption: 'Paylaş Butonuna Tıklayın' },
                        { src: 'cihaz-paylasimi-qr-2.png', alt: 'QR Paylaşım 2', caption: 'QR Kodu Gösteriliyor' },
                        { src: 'cihaz-paylasimi-qr-3.png', alt: 'QR Paylaşım 3', caption: 'Paylaşım QR Kodu' },
                      ],
                    },
                    {
                      number: 2,
                      title: 'QR Kodu Tarayarak Ekleyin',
                      description: 'Diğer kullanıcılar, cihaz paylaşım QR kodunu tarayarak cihazları ekleyebilir. Arayüzün sağ üst köşesindeki "+" simgesine tıklayın ve "QR Kodunu Tara" seçeneğini seçin.',
                    },
                    {
                      number: 3,
                      title: 'Cihazı Yeniden Adlandırın veya Silin',
                      description: 'Kullanıcılar ayrıca eklenen cihazı silebilir veya cihazın adını değiştirebilir. Cihaz simgesine uzun basın ve "Yeniden Adlandır" veya "Sil" seçeneğine tıklayın.',
                      images: [
                        { src: 'eklenen-cihazı-silme-adini-degistirme-1.png', alt: 'Silme 1', caption: 'Uzun Basın' },
                        { src: 'eklenen-cihazı-silme-adini-degistirme-2.png', alt: 'Silme 2', caption: 'Seçenekler' },
                        { src: 'eklenen-cihazı-silme-adini-degistirme-3.png', alt: 'Silme 3', caption: 'Onaylayın' },
                      ],
                    },
                  ]}
                />

                <InfoCard type="info">
                  Uygulamanın temel işlevlerini düzgün bir şekilde kullanabilmeniz için okumaya devam edin. Daha fazla işlem öğrenmek isterseniz, lütfen sonraki bölümleri okuyun.
                </InfoCard>
              </div>
            </Section>

            {/* Section 4: Smart Control */}
            <Section
              id="smart-control"
              title="Akıllı Kontrol Cihazı"
              subtitle="Senaryolar, otomasyon ve toplu kontrol özellikleri."
              icon={<AutomationIcon size={24} />}
            >
              {/* Scenario Setup */}
              <div id="scenario" className="scroll-mt-24">
                <h3 className="text-2xl font-bold text-white mb-6">Senaryo Kurma ve Yürütme</h3>

                <StepGuide
                  steps={[
                    {
                      number: 1,
                      title: 'Sahne Oluşturmayı Başlatın',
                      description: 'Arayüzün altındaki "Akıllı" butonuna tıklayın, ardından sağ üst köşedeki "+" simgesine tıklayın ve "Sahne Oluştur" seçeneğini seçin.',
                      images: [
                        { src: 'sahne-olusturma-1.png', alt: 'Sahne Oluşturma 1', caption: 'Akıllı Menüsü' },
                        { src: 'sahne-olusturma-2.png', alt: 'Sahne Oluşturma 2', caption: 'Sahne Oluştur' },
                        { src: 'sahne-olusturma-3.png', alt: 'Sahne Oluşturma 3', caption: 'Sahne Ayarları' },
                      ],
                    },
                    {
                      number: 2,
                      title: 'Senaryo Adı ve Simge Belirleyin',
                      description: 'Senaryonun adını belirleyin, "Onayla" butonuna tıklayın; istenilen simgeyi seçin, "Onayla" butonuna tıklayın; son olarak "Cihaz Ekle" butonuna tıklayın.',
                      images: [
                        { src: 'senaryo-kurma-yürütme-1.png', alt: 'Senaryo Kurma 1', caption: 'İsim Belirleyin' },
                        { src: 'senaryo-kurma-yürütme-2.png', alt: 'Senaryo Kurma 2', caption: 'Simge Seçin' },
                        { src: 'senaryo-kurma-yürütme-3.png', alt: 'Senaryo Kurma 3', caption: 'Cihaz Ekle' },
                      ],
                    },
                    {
                      number: 3,
                      title: 'Eklenecek Cihazları Seçin',
                      description: 'Eklenebilecek cihazları seçin ve "Onayla" üzerine tıklayın.',
                      images: [
                        { src: 'eklenebilecek-cihazlari-secin-ve-onayla-uzerine-tiklayin-1.png', alt: 'Cihaz Seç 1', caption: 'Cihazları Seçin' },
                        { src: 'eklenebilecek-cihazlari-secin-ve-onayla-uzerine-tiklayin-2.png', alt: 'Cihaz Seç 2', caption: 'Onaylayın' },
                      ],
                    },
                    {
                      number: 4,
                      title: 'Cihaz Parametrelerini Ayarlayın',
                      description: 'Eklenen cihaza tıklayın, parametre ayar paneline girin, gerekli cihaz parametrelerini ayarlayın, "Tamamla" butonuna tıklayın ve son olarak "Kaydet" butonuna tıklayın.',
                      images: [
                        { src: 'gerekli-cihaz-parametleri-ayarla-1.png', alt: 'Parametre 1', caption: 'Cihaza Tıklayın' },
                        { src: 'gerekli-cihaz-parametleri-ayarla-2.png', alt: 'Parametre 2', caption: 'Parametreleri Ayarlayın' },
                        { src: 'gerekli-cihaz-parametleri-ayarla-3.png', alt: 'Parametre 3', caption: 'Kaydedin' },
                      ],
                    },
                    {
                      number: 5,
                      title: 'Senaryoyu Çalıştırın',
                      description: 'Son olarak, kaydedilen senaryoya tıklayarak, cihaz senaryo tarafından belirlenen parametre planını uygulayabilir.',
                      images: [
                        { src: 'cihaz-senaryo-tarafından-belirlenen-parametre-planini-uygulayabilir.png', alt: 'Senaryo Uygula', caption: 'Senaryoyu Çalıştırın' },
                      ],
                    },
                  ]}
                />
              </div>

              {/* Automation Control */}
              <div id="automation" className="scroll-mt-24 mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Otomasyon Kontrolü</h3>

                <StepGuide
                  steps={[
                    {
                      number: 1,
                      title: 'Otomasyon Oluşturmayı Başlatın',
                      description: '"Otomasyon" seçeneğine tıklayın, ardından sağ üst köşedeki "+" simgesine tıklayın ve "Otomasyon Oluştur" seçeneğini seçin.',
                      images: [
                        { src: 'otomasyo-kontrolü-1.png', alt: 'Otomasyon 1', caption: 'Otomasyon Menüsü' },
                        { src: 'otomasyon-kontrolü-2.png', alt: 'Otomasyon 2', caption: 'Otomasyon Oluştur' },
                      ],
                    },
                    {
                      number: 2,
                      title: 'Tetikleme Koşulu Ekleyin',
                      description: 'Otomasyon Oluştur ekranına girin, "Tetikleme Koşulu Ekle"ye tıklayın, ardından yürütme zaman koşulunu ayarlamak için "Zamanlayıcı"ya tıklayın ve son olarak "Onayla"ya tıklayın.',
                      images: [
                        { src: 'otomasyon-olustur-1.png', alt: 'Otomasyon Oluştur', caption: 'Koşul Ekle' },
                        { src: 'tetikleme-kosulu-ekle-1.png', alt: 'Tetikleme 1', caption: 'Tetikleme Koşulu' },
                        { src: 'tetikleme-kosulu-ekle-2.png', alt: 'Tetikleme 2', caption: 'Zamanlayıcı' },
                        { src: 'tetikleme-kosulu-ekle-3.png', alt: 'Tetikleme 3', caption: 'Onaylayın' },
                      ],
                    },
                    {
                      number: 3,
                      title: 'Eylem Ekleyin',
                      description: '"Eylem Ekle"ye tıklayın, ardından "Sahneyi Etkinleştir"e tıklayın, oluşturulan sahneyi seçin ve son olarak "Onayla"ya tıklayın.',
                      images: [
                        { src: 'eylem-ekle-1.png', alt: 'Eylem Ekle', caption: 'Eylem Ekle' },
                        { src: 'sahneyi-etkinleştir.png', alt: 'Sahne Etkinleştir', caption: 'Sahneyi Etkinleştir' },
                        { src: 'sahneyi-etkinlestir-onayla.png', alt: 'Onay', caption: 'Onaylayın' },
                      ],
                    },
                    {
                      number: 4,
                      title: 'Geçerli Zaman Dilimini Ayarlayın',
                      description: 'Otomasyon için zaman dilimini ayarlamak üzere "Geçerli Zaman" butonuna tıklayın ve ardından "Onayla" butonuna tıklayın.',
                      images: [
                        { src: 'gecerli-zaman.png', alt: 'Geçerli Zaman', caption: 'Zaman Dilimi' },
                        { src: 'gecerli-zaman-2.png', alt: 'Geçerli Zaman 2', caption: 'Zaman Ayarları' },
                      ],
                    },
                    {
                      number: 5,
                      title: 'Otomasyonu Kaydedin',
                      description: '"Kaydet" butonuna tıklayın, otomasyon programının adını girin ve "Onayla" butonuna tıklayın. Zaman, belirlediğiniz koşullarla eşleştiğinde cihaz belirlediğiniz sahne programını otomatik olarak çalıştıracaktır.',
                      images: [
                        { src: 'otomasyon-olustur-isim-koy.png', alt: 'İsim', caption: 'İsim Belirleyin' },
                        { src: 'otomasyon-olustur-3-otomasyon ekranı.png', alt: 'Otomasyon Ekranı', caption: 'Otomasyon Hazır' },
                      ],
                    },
                  ]}
                />
              </div>

              {/* Group Control */}
              <div id="group-control" className="scroll-mt-24 mt-16">
                <h3 className="text-2xl font-bold text-white mb-6">Toplu Kontrol</h3>

                <StepGuide
                  steps={[
                    {
                      number: 1,
                      title: 'Grup Oluşturmayı Başlatın',
                      description: '"Grup" seçeneğine tıklayın, ardından sağ üst köşedeki "+" simgesine tıklayın ve "Grup Oluştur" seçeneğini seçin.',
                      images: [
                        { src: 'toplu-kontrol-1.png', alt: 'Toplu Kontrol 1', caption: 'Grup Menüsü' },
                        { src: 'toplu-kontrol-2.png', alt: 'Toplu Kontrol 2', caption: 'Grup Oluştur' },
                      ],
                    },
                    {
                      number: 2,
                      title: 'Grup Adı Belirleyin',
                      description: 'Grup adını belirleyin ve "Onayla"ya tıklayın. Oluşturduğunuz gruba tıklayın ve ardından "+Ekle" butonuna tıklayın.',
                      images: [
                        { src: 'toplu-kontrol-3.png', alt: 'Toplu Kontrol 3', caption: 'Grup Adı' },
                        { src: 'toplu-kontrol-4.png', alt: 'Toplu Kontrol 4', caption: 'Gruba Git' },
                        { src: 'toplu-kontrol-ekle.png', alt: 'Ekle', caption: '+Ekle' },
                      ],
                    },
                    {
                      number: 3,
                      title: 'Cihazları Gruba Ekleyin',
                      description: 'Eklenebilir cihazları seçin ve cihazları oluşturulan gruba eklemek için "Şimdi Ekle"ye tıklayın (birden fazla cihaz seçilebilir).',
                      images: [
                        { src: 'toplu-kontrol-eklenebilir-cihazları-gruba-eklemek-icin-sec.png', alt: 'Cihaz Seç', caption: 'Cihazları Seçin' },
                        { src: 'toplu-kontrol-eklenebilir-cihazları-gruba-eklemek-icin-sec-2.png', alt: 'Cihaz Seç 2', caption: 'Şimdi Ekle' },
                        { src: 'toplu-kontrol-eklenebilir-cihazları-gruba-eklemek-icin-sec-3.png', alt: 'Cihaz Seç 3', caption: 'Eklendi' },
                      ],
                    },
                    {
                      number: 4,
                      title: 'Toplu Kontrol Uygulayın',
                      description: '"Toplu Kontrol"e tıklayın, grupta kontrol etmek istediğiniz cihazları seçin ve ardından "Kontrol"e tıklayın.',
                    },
                    {
                      number: 5,
                      title: 'Komutu Gönderin',
                      description: 'Kontrol komut paneline girin, komutu seçin ve ayarlayın, son olarak cihazı toplu olarak kontrol etmek için "Komut Gönder"e tıklayın.',
                      images: [
                        { src: 'toplu-kontrol-komut-secin-1.png', alt: 'Komut Seç 1', caption: 'Komut Paneli' },
                        { src: 'toplu-kontrol-komut-secin-2.png', alt: 'Komut Seç 2', caption: 'Komut Seçin' },
                        { src: 'toplu-kontrol-komut-gonder.png', alt: 'Komut Gönder', caption: 'Komut Gönder' },
                      ],
                    },
                  ]}
                />
              </div>
            </Section>

            {/* Section 5: System Settings */}
            <Section
              id="system-settings"
              title="Sistem Ayarları"
              subtitle="Uygulama ve sistem yapılandırmaları."
              icon={<SettingsIcon size={24} />}
            >
              <p className="text-slate-300 mb-6">
                Arayüzün altındaki &quot;Me&quot; seçeneğine tıklayarak Sistem Ayarları ve Bilgi arayüzüne geçiş yapın.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <FeatureCard
                  icon={<DownloadIcon size={24} />}
                  title="Cihaz Güncellemesi"
                  description="Cihazın en son sürümünü güncelleyin."
                />
                <FeatureCard
                  icon={<GroupIcon size={24} />}
                  title="Ev Modu"
                  description="Aile üyelerini evdeki akıllı cihazları birlikte kullanmak üzere davet edin."
                />
                <FeatureCard
                  icon={<VolumeIcon size={24} />}
                  title="Bildirim Ayarları"
                  description="Bildirimleri, alarmları ve hata mesajlarını etkinleştir/devre dışı bırak."
                />
                <FeatureCard
                  icon={<TrashIcon size={24} />}
                  title="Önbelleği Temizle"
                  description="Sistem önbelleğini temizle."
                />
                <FeatureCard
                  icon={<InfoIcon size={24} />}
                  title="Gizlilik Politikası"
                  description="Uygulamanın gizlilik politikası ve hizmet sözleşmesini inceleyin."
                />
                <FeatureCard
                  icon={<SettingsIcon size={24} />}
                  title="Sistem İzinleri"
                  description="Uygulamanın telefon konumuna, kameraya ve fotoğraf albümlerine erişimini yönetin."
                />
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold text-white mb-4">Ek Özellikler</h4>
                <div className="glass rounded-xl p-6">
                  <ul className="space-y-3 text-slate-300">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <div>
                        <strong className="text-white">Hakkında:</strong> Uygulamanın sürümünü kontrol edin.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <div>
                        <strong className="text-white">Açık Kaynak Bileşen Lisansı:</strong> Açık kaynak bileşen lisanslarının listesi.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <div>
                        <strong className="text-white">Günlük Yükleme:</strong> Cihaz kullanımı sırasında karşılaşılan sorunları bildirmek için günlük yükleyin.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <div>
                        <strong className="text-white">Yorum Yaz:</strong> Uygulamayı değerlendirin.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full bg-green-500 mt-2" />
                      <div>
                        <strong className="text-white">Geri Bildirim:</strong> Uygulamayla ilgili deneyiminizdeki herhangi bir eksikliği burada bildirebilirsiniz.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* Footer */}
            <footer className="py-12 mt-16 border-t border-white/10">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center">
                    <BatteryIcon className="text-white" size={24} />
                  </div>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  Taşınabilir Güç Kaynağı
                </h4>
                <p className="text-sm text-slate-400 mb-4">
                  Kullanıcı Kılavuzu V3.0
                </p>
                <p className="text-xs text-slate-500">
                  © 2024 Tüm hakları saklıdır.
                </p>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </main>
  )
}
