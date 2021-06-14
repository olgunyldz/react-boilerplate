# React'a başlıyorum

Merhaba, yazdığım ilk yazımda React ile önyüz uygulaması geliştirmekten bahsedeceğim. React seçerken neler dikkatimi çekti, neyi ne için öğrenmem gerekti aktarmaya çalıştım.

## React nedir?

React, Facebook tarafından geliştirilen açık kaynaklı bir önyüz geliştirme kütüphanesidir. Önyüz için bileşenler oluşturmamızı sağlar. HTML, CSS ve Javascript bilgisi kısa sürede React ile önyüz bileşenleri ve uygulama geliştirmemizi sağlar.

## Neden React?

Öncelikle açık kaynaklı olması ve arkasında Facebook dahil güçlü bir community'nin olması iyi bir seçenek. Ancak kendi adıma, HTML, CSS ve Javascript ile bilgimiz mevcutsa hızlı bir şekilde React ile uygulama geliştirmeye başlayabilmemiz, öğrenmenin hızlı olması da bir seçenek (**_JSX_**).

React'ın performans olarak data değiştiğinde bileşen bazlı olarak render olmasından kaynaklı hızı da bir tercih sebebi.

React'ta, ata bileşenden alt bileşenlere doğru bir data akışı vardır ve alt bileşenden ata bileşene doğru event ile durum değişiklikleri iletilir(**_Single way data flow_**).

![setup.](docs/data-flow.png)

Figure 2.1

React, data değişikliklerini bileşenlerine yansıtmak için in-memory veri yapısı kullanır(**_Virtual Data Object Model_**). Yapılan değişiklikler böylece sadece datası değişen bileşenlerin güncellenmesini sağlar.

## React ile uygulama geliştirme - bebek adımları

Ufak bir bilgilenmeden sonra artık aksiyona geçmemiz gerekiyor. React'ın bizim için hazırlanmış template projesini oluşturarak başlayabiliriz. Ancak öncesinde geliştirme ortamımızı hazırlamamız gerekiyor.

### Node.js ve npm kurulumu

node.js ve npm React uygulamamızı çalıştırmak ve build almak için kullanacağımız komut satırı araçları.

node.js bizim için javascript uygulamalarını browser dışında çalıştırmamızı sağlar. [NodeJS](http://nodejs.org) üzerinden kurulumu yapabilirsiniz.

npm de kullanacağımız javascript paketlerini node kullanarak download etmemizi sağlayan araçtır.

![setup.](./docs/node.png)

Figure 2.1

Kurulumu gerçekleştirdikten sonra aşağıda ki komut ile kontrol edebilirsiniz. ***Kurulumlardan sonra ortam değişkenlerine path tanımları yapmayı unutmayın.***

```
node -v
npm -v
```

### Versiyon kontrol sistemi - git kurulumu

Projenin başlangıcından itibaren git ile versiyonlamanızın projenin ilerlemesini takip etmenizde büyük yararı olacaktır.

[git](https://git-scm.com/downloads)

### Geliştirme Arayüzü - Visual Studio Code

Geliştirme arayüzü olarak Visual Studio Code kullanıyorum.
[Visual Studio Code](https://code.visualstudio.com/)

## React ilk uygulama

Eh artık herşeyimiz hazırsa geliştirmeye başlayabiliriz. Aslında bundan sonrasında ilk projenin oluşturulmasını node üzerinden hazır bir template oluşturan paket yapacak. :)

```
npx create-react-app react-boilerplate
cd react-boilerplate
```

Kurulum gerçekleştikten sonra folder yapısı aşağıda ki gibi olur.

![İlk görünüm.](./docs/first-create.png)

```json
...
 "dependencies": {
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^11.2.7",
    "@testing-library/user-event": "^12.8.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  ...
```

**_package.json_** projemizin genel bağımlılıklarını içerir. ayrıca scripts sekmesinin altında da projeyi komut satırından çalıştırırken kullanabileceğimiz kısa yolları ekleyebiliriz.

- **_react-dom_** DOM'a özel methodları içerir. index.js içinde render methodu uygulamamızı DOM'a yazmak için kullanılır.
- **_react-scripts_** script ve konfigurasyonları içerir.

**\*node-modules** package.json içinde yer alan bütün bağımlılıkları içerir.

**_public_** webserver'in ilgileneceği root dizin burasıdır. index.html aslında erişilir. `index.html` sayfasında yer alan ` <div id="root"></div>` bizim için önemlidir. Ayrıca css, metatags ve icon'lar burada yer alır. `manifest.json` dosyasıysa uygulama ile ilgili genel bilgileri içerir. Mesela mobil bir telefonda kısa yol olarak eklenirsek icon, text vs bilgileri buradadır.

**_src_** dizininde asıl react uygulaması buradadır. Yani asıl kodumuzuda buraya yazacağız. `index.js` içinde inde.html de belirttiğimiz DOM'daki `root` element'e erişmemizi sağlar. `<App />` ise bizim ilk react bileşenimizdir.

```javascript
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
```

Artık ilk uygulama hakkında bilgilerimizi edindiğimize göre bakalım bize template ne oluşturmuş.

```
npm start
```

Uygulama başladıktan sonra kendisi default tanımlı browser neyse onda açılacak.

![İlk başlatma.](./docs/first-start.png)

![İlk Görünüm.](./docs/first-screen.png)
