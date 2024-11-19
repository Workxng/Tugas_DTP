import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import WisataDetail from "../../components/Wisata";

const data = [
    {
      id: "1",
      gambar: "https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/03/leebudihart_76864081_2484833498431751_3194446755026370817_n.jpg",
      nama: "Pantai Kuta",
      lokasi: "Pantai dengan pasir putih dan ombak yang cocok untuk berselancar di Bali."
    },
    {
      id: "2",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmhHSH0gqsJf0rrsosUwSElVUN1PcKvEDwYQ&s",
      nama: "Borobudur",
      lokasi: "Candi Buddha terbesar di dunia yang terletak di Magelang, Jawa Tengah"
    },
    {
      id: "3",
      gambar: "https://asset.kompas.com/crops/9GFOX2-n00eSy8EvhR2r0nlFd_w=/0x1:1000x668/1200x800/data/photo/2021/08/06/610d24fd0501a.jpg",
      nama: "Danau Toba",
      lokasi: "Danau vulkanik terbesar di Asia Tenggara yang berada di Sumatera Utara."
    },
    {
      id: "4",
      gambar: "https://torch.id/cdn/shop/articles/Artikel_167_-_Preview.webp?v=1713337145",
      nama: "Gunung Bromo",
      lokasi: "Gunung berapi aktif dengan pemandangan matahari terbit yang spektakuler di Jawa Timur."
    },
    {
      id: "5",
      gambar: "https://imgx.parapuan.co/crop/0x0:0x0/x/photo/2023/09/25/picture1jpg-20230925082943.jpg",
      nama: "Taman Mini Indonesia Indah",
      lokasi: "Taman yang menampilkan miniatur budaya dan rumah adat dari seluruh Indonesia"
    },
    {
      id: "6",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6i56-AGJ7cSEh9mId1BCgtAgQazLA4fDsTQ&s",
      nama: "Pulau Komodo",
      lokasi: "Habitat asli komodo dengan panorama alam yang memukau di Nusa Tenggara Timur"
    },
    {
      id: "7",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRExRhfJAJ3fmREbv2l9qPcoS-XfLuO32yp0Q&s",
      nama: "Raja Ampat",
      lokasi: "Kepulauan dengan keindahan bawah laut yang terkenal di Papua Barat."
    },
    {
      id: "8",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmow3v4Vbs28oEig-bl81bZhNvP2yE0BPOpA&s",
      nama: "Taman Nasional Ujung Kulon",
      lokasi: "empat perlindungan badak Jawa yang terletak di Banten."
    },
    {
      id: "9",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMa1qcJ0GUYYjznjUoNz4Xq4G0MY0fbSIjDw&s",
      nama: "Kawah Ijen",
      lokasi: "Gunung dengan fenomena api biru yang unik di Banyuwangi, Jawa Timur."
    },
    {
      id: "10",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6Z42jww4AsudN7BeOUOA1IsFUOjOak86fUw&s",
      nama: "Candi Prambanan",
      lokasi: "Candi Hindu terbesar di Indonesia yang berada di Yogyakarta."
    },
    {
      id: "11",
      gambar: "https://bnp.jambiprov.go.id/wp-content/uploads/2023/02/tana-toraja-1.png",
      nama: "Tana Toraja",
      lokasi: "Kawasan budaya dengan tradisi unik dan rumah adat Tongkonan di Sulawesi Selatan."
    },
    {
      id: "12",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHUWTqYFmf0JbW2w2YrPenfH2-QOZqcVYKqw&s",
      nama: "Pulau Belitung",
      lokasi: "Pulau dengan pantai berpasir putih dan batu granit besar di Bangka Belitung."
    },
    {
      id: "13",
      gambar: "https://awsimages.detik.net.id/community/media/visual/2023/05/03/puncak-jayawijaya-carstensz-pyramid_169.png?w=600&q=90",
      nama: "Puncak Jaya",
      lokasi: "Gunung tertinggi di Indonesia yang terletak di Papua."
    },
    {
      id: "14",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeLHux4Vq4vg0TjFzWFJuxS6NdNc46RYyjlA&s",
      nama: "Bukit Lawang",
      lokasi: "Pusat rehabilitasi orangutan yang berada di Sumatera Utara."
    },
    {
      id: "15",
      gambar: "https://awsimages.detik.net.id/community/media/visual/2021/07/05/wisata-super-prioritas-labuan-bajo_169.jpeg?w=650",
      nama: "Labuan Bajo",
      lokasi: "Kota kecil yang menjadi pintu gerbang menuju Pulau Komodo di Nusa Tenggara Timur."
    },
    {
      id: "16",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_h_Wjx8wjPBfpgFCcCC-YBpaZIUvFKvkOww&s",
      nama: "Gunung Rinjani",
      lokasi: "Gunung dengan pemandangan danau Segara Anak di Lombok, Nusa Tenggara Barat."
    },
    {
      id: "17",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP1Fo94_Au-JDTMKq6tElqw4eFQUhWR__Urw&s",
      nama: "Pantai Parangtritis",
      lokasi: "Pantai populer dengan mitos Nyai Roro Kidul di Yogyakarta."
    },
    {
      id: "18",
      gambar: "https://ik.imagekit.io/tvlk/blog/2020/01/keindahan-alam-indonesia-5-Super-Adventure.jpg?tr=dpr-2,w-675",
      nama: "Taman Laut Bunaken",
      lokasi: "Destinasi menyelam kelas dunia dengan terumbu karang yang indah di Sulawesi Utara."
    },
    {
      id: "19",
      gambar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TTuNc6P4Wak41WRM93XNu5OyomfzqANXlA&s",
      nama: "Pantai Senggigi",
      lokasi: "Pantai yang menawarkan pemandangan matahari terbenam yang indah di Lombok."
    },
    {
      id: "20",
      gambar: "https://dlh.bulelengkab.go.id/uploads/konten/60-pentingnya-hutan-mangrove-bagi-lingkungan-hidup.jpg",
      nama: "Hutan Mangrove Bali",
      lokasi: "Kawasan pelestarian mangrove dengan jalur trekking kayu di Bali"
    }
  ];

  const WisataMore = () => {
    const { wisata } = useLocalSearchParams();
    const selectedWisata = data.filter(function (item) {
      return item.id === wisata;
    });
  
    console.log(selectedWisata);
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "white",
          flex: 1,
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WisataDetail item={selectedWisata[0]} />
      </SafeAreaView>
    );
  };
  
  export default WisataMore;