/**
 * @typedef {Object} Article
 * @property {string} heading
 * @property {string|string[]} value
 */

/** @type {Article[]} */
export const articles = [
  {
    heading: "Peran AI dalam Mitigasi & Adaptasi Perubahan Iklim",
    value: [
      "Memantau Kondisi Lingkungan Secara Real-time: AI bisa melacak data dari sensor-sensor lingkungan. Misalnya, AI memeriksa kadar karbon dioksida atau suhu permukaan laut yang terus naik. Nah, data ini bisa bantu kita untuk menyusun rencana tindakan cepat kalau terjadi peningkatan gas rumah kaca atau suhu yang ekstrim.",
      "Optimisasi Penggunaan Energi dengan Prediksi AI: AI bisa mengatur distribusi energi terbarukan seperti listrik dari matahari atau angin yang kadang naik-turun sesuai cuaca. Jadi kadang, energi yang dihasilkan itu lebih banyak dari yang dibutuhkan, apalagi waktu siang hari atau saat angin kencang. Nah, AI bisa bantu atur kapan energi yang lebih ini disimpan di baterai atau grid, lalu menentukan kapan energi di baterai ini dilepas lagi pas produksi sedang rendah.",
      "Prediksi dan Tanggap Bencana Alam Lebih Cepat: AI bisa memprediksi bencana alam seperti gempa, banjir, atau badai. Prediksi ini dilakukan dengan menganalisis data dari sensor seismik atau cuaca untuk melakukan prediksi yang akurat.",
    ],
  },
  {
    heading:
      "Contoh Penerapan AI dalam Pemantauan Lingkungan & Prediksi Bencana",
    value: [
      "Pemantauan Kebakaran Hutan dengan Drone AI: Contohnya pada Amazon dan Australia, drone dengan AI membantu patroli daerah hutan besar untuk deteksi asap atau tanda awal kebakaran.",
      "Pemetaan Emisi Gas Rumah Kaca dari Satelit: Ada beberapa satelit khusus yang bisa melacak emisi karbon di daerah-daerah tertentu, Salah satu contohnya adalah MethaneSAT.",
      "Optimisasi Jaringan Listrik Terbarukan: Di beberapa negara seperti Jerman atau Amerika, AI digunakan untuk membuat energi yang dipakai lebih stabil, hemat, dan ramah lingkungan.",
    ],
  },
  {
    heading: "Tantangan dalam Penerapan AI untuk Perubahan Iklim ",
    value: [
      "Biaya dan Sumber Daya: Implementasi AI masih butuh biaya besar buat data, perangkat keras, dan pemeliharaan. Biaya dan sumber daya ini jadi tantangan yang sulit, terlebih lagi pada negara berkembang seperti Indonesia.",
      "Ketersediaan Data: AI perlu data besar untuk akurasi yang tinggi. Sayangnya tidak semua daerah memiliki data lingkungan yang lengkap untuk kebutuhan AI ini.",
      "Etika & Privasi: Pemantauan lingkungan atau populasi juga menyentuh masalah etika dan privasi. dan terutama bila pemantauan ini menggunakan teknologi drone atau satelit. ",
    ],
  },
  {
    heading: "Kesimpulan",
    value: [
      "AI mempunyai peran penting buat membantu kita menghadapi perubahan iklim, mulai dari memantau kondisi lingkungan hingga memprediksi bencana alam yang bisa muncul kapan saja. Dengan berbagai contoh nyata seperti pemantauan hutan, deteksi emisi, dan optimasi jaringan energi.",
      "Teknologi AI bisa membuat tindakan kita lebih efektif untuk adaptasi dan mitigasi, baik buat sekarang maupun masa depan. Intinya, AI bukan cuma sekadar teknologi, tapi solusi nyata buat masa depan bumi yang lebih aman dan berkelanjutan bagi kita semuanya.",
    ].join("\n"),
  },
];

/** @param {string} heading */
export const headingToId = (heading) =>
  heading.replaceAll(" ", "-").toLowerCase();

/** @type {HTMLElement} */
const articleContainer = document.querySelector("#content");

for (const { heading, value: content } of articles) {
  const article = document.createElement("article");

  const h2 = document.createElement("h2");
  h2.id = headingToId(heading);
  h2.innerText = heading;
  article.appendChild(h2);

  if (Array.isArray(content)) {
    const ol = document.createElement("ol");
    for (const listItem of content) {
      const li = document.createElement("li");
      li.innerText = listItem;
      ol.appendChild(li);
    }

    article.appendChild(ol);
  } else {
    for (const line of content.split("\n")) {
      const p = document.createElement("p");
      p.innerText = line;
      article.appendChild(p);
    }
  }

  articleContainer.appendChild(article);
}
