
import './App.css';
import Cart from './Cart';

function App() {
  const products = {
    1: {
      id: 1,
      title: "Mediolas",
      thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReqmBycdDD1TCnkJw4z-MNFABzewG5Ph2r3Q&usqp=CAU",
      introduct: "Chào mừng bạn đến với ",
    },
    2: {
      id: 2,
      title: "Piltover",
      thumbnail: "https://i.pinimg.com/736x/0d/48/34/0d48342117a8f25333b5366a0a8b0cec.jpg",
      introduct: "Chào mừng bạn đến với ",
    },
    3: {
      id: 3,
      title: "SlyderKing",
      thumbnail: "https://hekhacbiet.com/wp-content/uploads/2023/03/59-anh-gai-dep-lam-avatar-che-mat-ngau-ca-tinh-chat-choi-2.jpg",
      introduct: "Chào mừng bạn đến với ",
    },
    4: {
      id: 4,
      title: "MethotPi",
      thumbnail: "https://kynguyenlamdep.com/wp-content/uploads/2022/07/gai-xinh-toc-ngan-phong-cach-han-quoc.jpg",
      introduct: "Chào mừng bạn đến với ",
    },
    5: {
      id: 5,
      title: "Casopica",
      thumbnail: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-trung-quoc-cuc-dep.jpg",
      introduct: "Chào mừng bạn đến với ",
    },
    6: {
      id: 6,
      title: "Monaliza",
      thumbnail: "https://haycafe.vn/wp-content/uploads/2022/03/Anh-sad-2.jpg",
      introduct: "Chào mừng bạn đến với ",
    },
    7: {
      id: 7,
      title: "Megabang",
      thumbnail: "https://p16-capcut-sign-va.ibyteimg.com/tos-alisg-v-643f9f/ac17933ba6a542a2827125df33540dc6~tplv-nhvfeczskr-image.image?x-expires=1717290478&x-signature=B9oCvhEn843N%2BoWuOoDtiBBoFzk%3D",
      introduct: "Chào mừng bạn đến với ",
    },
    8: {
      id: 8,
      title: "MoroKing",
      thumbnail: "https://timbaby.net/wp-content/uploads/2022/11/anh-gai-dep-toc-ngan-che-mat-13.jpg",
      introduct: "Chào mừng bạn đến với ",
    },
  };

  return (
    <div className="app">
      <Cart products={products} />
    </div>
  );
}

export default App;
