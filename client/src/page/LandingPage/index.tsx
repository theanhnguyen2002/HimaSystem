import React, { useState } from "react";
import { IconFB } from "../../components/icon/IconFB";
import { IconMenu } from "../../components/icon/IconMenu";
import { IconMail } from "../../components/icon/IconMail";
import { IconPhone } from "../../components/icon/IconPhone";
import { IconDiamond } from "../../components/icon/IconDiamond";
import { IconHeart } from "../../components/icon/IconHeart";
import { IconPhoto } from "../../components/icon/IconPhoto";
import { IconGift } from "../../components/icon/IconGift";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { IconArrowForward } from "../../components/icon/IconArrowForward";

interface Props {
  collapseID?: string;
}

const LandingPage = (props: Props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="text-gray-800 antialiased">
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >
              <img
                className="w-36"
                src="https://res.cloudinary.com/ddj3vx8q3/image/upload/v1730829721/HimaWeddingFilm_white_xt7go8.png"
                alt=""
              />
            </a>
            <button
              className="cursor-pointer text-xl leading-none py-1 -mt-4 lg:border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={toggleNavbar}
            >
              <IconMenu width="32" height="32" />
            </button>
          </div>
          <div
            className={`${
              isCollapsed ? "hidden" : "flex"
            } lg:flex flex-grow items-center lg:bg-transparent lg:shadow-none hidden`}
            id="example-collapse-navbar"
          >
            {/* <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="flex items-center">
                                <a className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold" href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/landing"><i className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2" />
                                    Docs</a>
                            </li>
                        </ul> */}
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/profile.php?id=61557647955666"
                >
                  <IconFB width="24" height="24" />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="mailto:nguyentheanh14072002@gmail.com"
                >
                  <IconMail width="24" height="24" />
                  <span className="lg:hidden inline-block ml-2">Gmail</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="tel:0923239468"
                >
                  <IconPhone width="24" height="24" />
                  <span className="lg:hidden inline-block ml-2">
                    Điện thoại
                  </span>
                </a>
              </li>
              <li className="flex items-center">
                <button
                  className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3"
                  type="button"
                  style={{ transition: "all 0.15s ease 0s" }}
                >
                  <i className="fas fa-arrow-alt-circle-down" /> Đăng Nhập
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minHeight: "75vh" }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/ddj3vx8q3/image/upload/v1730826455/Bi%CC%80a_clywue.jpg")',
            }}
          >
            <span
              id="blackOverlay"
              className=" flex !w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-full px-4 ml-auto mr-auto text-center">
                <div className="lg:pr-12 pt-8">
                  <h1 className="text-white font-semibold text-5xl">
                    Hima Wedding Film - Chụp Ảnh Phóng Sự Cưới Sóc Sơn
                  </h1>
                  <p className="mt-4 text-lg text-white">
                    Những khoảnh khắc yêu thương là mảnh ghép tuyệt vời tạo nên
                    câu chuyện của bạn. Từ ánh mắt ngày cưới đến nụ cười người
                    thân, 𝑯𝒊𝒎𝒂 𝑾𝒆𝒅𝒅𝒊𝒏𝒈 𝑭𝒊𝒍𝒎 sẽ giúp bạn lưu giữ kỷ niệm mãi mãi.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: 70 }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <IconDiamond width="24" height="24" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Cam Kết Chất Lượng
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      "Hima Wedding Film cam kết ghi lại từng khoảnh khắc qua cả
                      chụp ảnh và quay phim, biến mỗi thước phim và khung hình
                      thành kỷ niệm vĩnh cửu của ngày cưới."
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <IconHeart width="24" height="24" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Tận Tâm Đến Từng Chi Tiết
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      "Với sự tận tâm và tỉ mỉ trong từng góc máy chụp và khung
                      hình quay, chúng tôi đảm bảo sẽ mang đến cho bạn những bức
                      ảnh chân thực và thước phim đầy cảm xúc."
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <IconPhoto width="24" height="24" />
                    </div>
                    <h6 className="text-xl font-semibold">
                      Đồng Hành Cùng Ký Ức
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                      "Hành trình của bạn là cảm hứng - Hima Wedding Film lưu
                      giữ những hình ảnh và thước phim đầy cảm xúc, đồng hành
                      qua từng khoảnh khắc đáng nhớ."
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto text-start">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                  <IconGift width="24" height="24" />
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Quà tặng và ưu đãi cực hấp dẫn khi đặt lịch tại Hima Wedding
                  Film
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                  📌 GIẢM NGAY 10% KHI BOOK TRỰC TIẾP QUA FANPAGE.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  📌 QUAY CHỤP không giới hạn file , chỉnh sửa toàn bộ ảnh.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                  📌 Tặng bay FLYCAM trị giá 2.000.000đ khi BOOK COMBO QUAY
                  CHỤP.
                </p>
                <a
                  href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                  className="font-bold text-gray-800 mt-8 no-underline"
                >
                  Đặt lịch ngay!
                </a>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-600">
                  <iframe
                    src="https://www.youtube.com/embed/QndF5igzv6I"
                    className="w-full h-full align-middle rounded-t-lg"
                    title="YouTube video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ height: "230px" }}
                  ></iframe>
                  <div className="relative p-8 bg-[#db2777]">
                    {/* <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="absolute left-0 w-full block" style={{ height: 95, top: '-94px' }}>
                                            <polygon points="-30,95 583,95 583,65" className="text-pink-600 fill-current" />
                                        </svg> */}
                    <h4 className="text-xl font-bold text-white">
                      Ký Ức Vẹn Nguyên Qua Từng Thước Phim:
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      "Đối với chúng tôi, những thước phim không chỉ là hình
                      ảnh, mà là những ký ức sống động, lưu giữ mọi cảm xúc và
                      khoảnh khắc đặc biệt trong hành trình của bạn."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: 80 }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <Swiper
                  modules={[Pagination, Navigation]}
                  pagination={{ clickable: true }}
                  navigation
                  spaceBetween={10}
                  slidesPerView={1}
                  className="h-full rounded-lg shadow-lg"
                >
                  <SwiperSlide>
                    <img
                      alt="Slide 1"
                      className="w-full h-full object-contain rounded-lg"
                      src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/461418546_122156971844254931_2175395595484075470_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeF4quVa68SSe2CO9dBhK-2KPTFvz-voos89MW_P6-iiz89pezxP_0xeyfzcSatE2383bkThcxUk-W3kTdG_V-Of&_nc_ohc=ODJFcVQS2UYQ7kNvgGVy7lD&_nc_zt=23&_nc_ht=scontent.fhan5-11.fna&_nc_gid=AiOWvMBp40Imdqythn2DbzD&oh=00_AYDbjrThTr-ullRlfNY_k2H7UZB0mcSEeIbDZBi9o6yZwA&oe=673100A3"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Slide 2"
                      className="w-full h-full object-contain rounded-lg"
                      src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-6/460027205_2243337422712967_865164804291587983_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEeYmltROobNm-_fpD3c0M_h9NRAwd80BSH01EDB3zQFAYbWlhcwxsYpGsHLtnMSHeW-iECg5rxwqMkw-aIllMs&_nc_ohc=ALqOt_z_8ZAQ7kNvgFId8WB&_nc_zt=23&_nc_ht=scontent.fhan5-9.fna&_nc_gid=Ayyar1xIv3AQymzP69w22vi&oh=00_AYB2o4JufpzBp8JjnMMSyKTbmABHaMY09mJ-Uin7FWT1tg&oe=6730B524"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      alt="Slide 3"
                      className="w-full h-full object-contain rounded-lg"
                      src="https://scontent.fhan5-8.fna.fbcdn.net/v/t39.30808-6/465851534_2290929081287134_6299348081918081334_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_ohc=HFFz7-Bb_W4Q7kNvgHJJYr9&_nc_zt=23&_nc_ht=scontent.fhan5-8.fna&_nc_gid=AeZ3NGKrWD67rtngU2-cC1D&oh=00_AYAxeYGAvTZ-kyImEje8DdXB6YDDeIUHrwInu46w7ZD_hg&oe=67311D7B"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                    <IconPhoto width="24" height="24" />
                  </div>
                  <h3 className="text-3xl font-semibold">Wedding Ceremony</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    "Chặng đường mới mở ra, nơi hai trái tim hòa cùng nhịp đập.
                    Hạnh phúc trọn vẹn không chỉ ở những gì ta có, mà ở sự đồng
                    hành, sẻ chia và yêu thương trong từng khoảnh khắc."
                  </p>
                  <ul className="list-none mt-6 flex justify-content">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="flex text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 mr-3">
                            <IconArrowForward width="24" height="24" />
                          </span>
                        </div>
                        <div>
                          <a
                            className="text-gray-600 text-[14px] no-underline"
                            href="https://www.facebook.com/profile.php?id=61557647955666"
                          >
                            Liên hệ đặt lịch ngay!
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pt-20 pb-48">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Đây là những anh hùng của chúng tôi
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Theo Cơ quan Quản lý Khí quyển và Đại dương Quốc gia, Ted,
                  Scambos, nhà mùi hương hàng đầu của NSIDC, đưa ra mức kỷ lục
                  có khả năng đạt được.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:flex md:w-9/12 justify-center">
                <div className="w-full md:w-6/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="Nguyễn Thế Anh"
                      src="https://scontent.fhan5-9.fna.fbcdn.net/v/t39.30808-1/419911402_2076994986013879_8685908315044894683_n.jpg?stp=c0.683.1365.1365a_dst-jpg_s480x480&_nc_cat=109&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGTP_yJRQeYuPP3jCFfVYTJ13K11EivSyLXcrXUSK9LIil7YMVWSpXhPCVWYHxOTdFUhFvK-1vD7fpFqMZc6EUy&_nc_ohc=h55tbw8TvHEQ7kNvgGM_T-U&_nc_zt=24&_nc_ht=scontent.fhan5-9.fna&_nc_gid=AkojaRQ_7LHRJ7BiZU6Uv8n&oh=00_AYAJT20nXgcq-_M7yy8ZViZC0qHTyipu7ayjbhnipcbG6g&oe=6730D1AC"
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{ maxWidth: 120 }}
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Nguyễn Thế Anh</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        Photographer / Camerman
                      </p>
                      <div className="mt-6 flex justify-center gap-2">
                        <li className="flex items-center">
                          <a
                            className=""
                            href="https://www.facebook.com/profile.php?id=61557647955666"
                          >
                            <IconFB width="32" height="32" color="#2563eb" />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <a
                            className=""
                            href="https://www.facebook.com/profile.php?id=61557647955666"
                          >
                            <IconFB width="32" height="32" color="#2563eb" />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <a
                            className=""
                            href="https://www.facebook.com/profile.php?id=61557647955666"
                          >
                            <IconFB width="32" height="32" color="#2563eb" />
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="Trần Thị Yến"
                      src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-1/448719003_2195249794166685_3453710915303333008_n.jpg?stp=dst-jpg_s480x480&_nc_cat=100&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeHrKvPtnVf3LHc5hM1fEWRXPumh4TVkqAs-6aHhNWSoC4XntRC9HGMkT515QHJ6Fwk0IfzOMAea-2tWAU_0dYcn&_nc_ohc=vh7YN_ZbTLMQ7kNvgErzePO&_nc_zt=24&_nc_ht=scontent.fhan5-11.fna&_nc_gid=A7Yk7FsLv8Gsco1xNquUAuT&oh=00_AYAOrl9Y8FPX2fmathWW83gIt3BTJMGm22nwQapn3pRlsg&oe=6730C2E5"
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{ maxWidth: 120 }}
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Trần Thị Yến</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        Makeup / Mua
                      </p>
                      <div className="mt-6 flex justify-center gap-2">
                        <li className="flex items-center">
                          <a
                            className=""
                            href="https://www.facebook.com/profile.php?id=61557647955666"
                          >
                            <IconFB width="32" height="32" color="#2563eb" />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <a
                            className=""
                            href="https://www.facebook.com/profile.php?id=61557647955666"
                          >
                            <IconFB width="32" height="32" color="#2563eb" />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <a
                            className=""
                            href="https://www.facebook.com/profile.php?id=61557647955666"
                          >
                            <IconFB width="32" height="32" color="#2563eb" />
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 relative block bg-gray-900">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: 80 }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-gray-900 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
          <div className="container mx-auto px-4 lg:pt-24 lg:pb-64">
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold text-white">
                  Build something
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
                  Put the potentially record low maximum sea ice extent tihs
                  year down to low ice. According to the National Oceanic and
                  Atmospheric Administration, Ted, Scambos.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center">
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl" />
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white">
                  Excelent Services
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl" />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Grow your market
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-gray-900 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl" />
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white">
                  Launch time
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Want to work with us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Complete this form and we will get back to you in 24
                      hours.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Full Name"
                        style={{ transition: "all 0.15s ease 0s" }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Email"
                        style={{ transition: "all 0.15s ease 0s" }}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                        rows={4}
                        cols={80}
                        className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Type a message..."
                        defaultValue={""}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all 0.15s ease 0s" }}
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="relative bg-gray-300 pt-8 pb-6">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
          style={{ height: 80 }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x={0}
            y={0}
          >
            <polygon
              className="text-gray-300 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-gray-700">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className="mt-6">
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-twitter" />
                </button>
                <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-facebook-square" />
                </button>
                <button
                  className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-dribbble" />
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                  type="button"
                >
                  <i className="flex fab fa-github" />
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://blog.creative-tim.com"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial"
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.creative-tim.com/bootstrap-themes/free"
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                    Other Resources
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/terms"
                      >
                        Terms &amp; Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/privacy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://creative-tim.com/contact-us"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="flex text-sm text-gray-600 font-semibold py-1">
                <p>Copyright © 2024 Studio by</p>
                <a
                  href="https://www.facebook.com/profile.php?id=61557647955666"
                  className="pl-1 text-gray-600 hover:text-gray-900"
                >
                  Hima Wedding Film
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
