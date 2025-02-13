import { useEffect, useState } from "react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { IconArrowForward } from "../../components/icon/IconArrowForward";
import { IconDiamond } from "../../components/icon/IconDiamond";
import { IconFB } from "../../components/icon/IconFB";
import { IconHeart } from "../../components/icon/IconHeart";
import { IconMail } from "../../components/icon/IconMail";
import { IconMailColor } from "../../components/icon/IconMailColor";
import { IconMenu } from "../../components/icon/IconMenu";
import { IconPhone } from "../../components/icon/IconPhone";
import { IconPhoto } from "../../components/icon/IconPhoto";
import { IconStar } from "../../components/icon/IconStar";
import { IconUsd } from "../../components/icon/IconUsd";
import { IconWeChat } from "../../components/icon/IconWeChat";
import s from "./style.module.scss";
import ModalImages from "../../components/common/CommonModal/ModalImages";
import { Controller, useForm } from "react-hook-form";
import ForwardedInput from "../../components/common/Innput";
import { ErrorTooltip } from "../../components/common/Text/ErrorTooltip";
import { REGEX } from "../../utils/constants/regex";
import { toast } from "react-toastify";
import MapComponent from "../../components/common/MapComponent";
import { useForm as useFormSpree } from "@formspree/react";
import imagesData from './../../data/Images.json';

interface Props {
  collapseID?: string;
  IFormInputs?: IFormContact;
}
interface IFormContact {
  name: string;
  phone: string;
  message: string;
}

type Image = { src: string; alt: string };

const LandingPage = (props: Props) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormContact>();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const handleOpen = (image: any) => {
    setSelectedImage(image);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const [bannerImages, setBannerImages] = useState<Image[]>([]);
  const [albumImages, setAlbumImages] = useState<Image[]>([]);

  useEffect(() => {
    setBannerImages(imagesData.Images_Banner);
    setAlbumImages(imagesData.Images_Album);
  }, []);

  const [state,] = useFormSpree("mldekkgz");
  const handleSubmitForm = async (data: IFormContact) => {
    // dispatch(loginAsync(data));
    try {
      const response = await fetch('https://formspree.io/f/mldekkgz', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          message: data.message,
        }),
      });
  
      if (response.ok) {
        toast.success("Đã gửi thành công!");
        reset();
      } else {
        toast.error("Gửi không thành công. Vui lòng thử lại.");
      }
    } catch (error) {
      toast.error("Lỗi gửi không mong muốn!");
    }
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
            className={`${isCollapsed ? "hidden" : "flex"
              } flex lg:hidden flex-grow items-center lg:!bg-transparent lg:shadow-none bg-[#fff] rounded-lg sm:shadow-lg`}
            id="example-collapse-navbar"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/profile.php?id=61557647955666"
                >
                  <IconFB
                    width="24"
                    height="24"
                    color={`${isCollapsed ? "#ffff" : "#00000"}`}
                  />
                  <span className="lg:hidden inline-block ml-2">Facebook</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="mailto:himaweddingfilm@gmail.com"
                >
                  <IconMail
                    width="24"
                    height="24"
                    color={`${isCollapsed ? "#ffff" : "#00000"}`}
                  />
                  <span className="lg:hidden inline-block ml-2">Gmail</span>
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="tel:0923239468"
                >
                  <IconPhone
                    width="24"
                    height="24"
                    color={`${isCollapsed ? "#ffff" : "#00000"}`}
                  />
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
          {/* End div mb */}
          <div
            className="hidden lg:flex flex-grow items-center lg:!bg-transparent lg:shadow-none bg-[#fff] rounded-lg sm:shadow-lg"
            id="example-collapse-navbar"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/profile.php?id=61557647955666"
                >
                  <IconFB
                    width="24"
                    height="24"
                    color={`${isCollapsed ? "#ffff" : "#00000"}`}
                  />
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="mailto:nguyentheanh14072002@gmail.com"
                >
                  <IconMail
                    width="24"
                    height="24"
                    color={`${isCollapsed ? "#ffff" : "#00000"}`}
                  />
                </a>
              </li>
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="tel:0923239468"
                >
                  <IconPhone
                    width="24"
                    height="24"
                    color={`${isCollapsed ? "#ffff" : "#00000"}`}
                  />
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
          {/* End div pc */}
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
                'url("https://res.cloudinary.com/ddj3vx8q3/image/upload/v1738848654/9_rccho3.jpg")',
            }}
          >
            <span
              id="blackOverlay"
              className=" flex !w-full h-full absolute opacity-40 bg-black"
            />
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-full px-4 ml-auto mr-auto text-center">
                <div className="pt-8">
                  <h1 className="text-white font-semibold text-5xl">
                    Hima Wedding Film - Chụp Ảnh Phóng Sự Cưới
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
          </div>
        </section>
        <section className="relative py-8">
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
              <div className="w-full ml-auto mr-auto px-4 pt-8 md:pt-0">
                <div className="md:pr-12">
                  <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-[#db2777]">
                    <IconPhoto width="24" height="24" />
                  </div>
                  <h3 className="text-3xl font-semibold">Wedding Ceremony</h3>
                  <p className="mt-4 text-lg leading-relaxed text-gray-600">
                    "Chặng đường mới mở ra, nơi hai trái tim hòa cùng nhịp đập.
                    Hạnh phúc trọn vẹn không chỉ ở những gì ta có, mà ở sự đồng
                    hành, sẻ chia và yêu thương trong từng khoảnh khắc."
                  </p>
                  <div className="list-none mt-6 flex justify-center">
                    <li className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="flex text-xs font-semibold inline-block uppercase rounded-full text-pink-600">
                            <IconArrowForward width="24" height="24" />
                          </span>
                        </div>
                        <div className="pl-2 pb-1">
                          <a
                            className="text-gray-600 text-[14px] no-underline"
                            href="https://m.me/61557647955666"
                          >
                            Liên hệ đặt lịch!
                          </a>
                        </div>
                      </div>
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative py-10 md:px-10">
          <div className="flex flex-wrap justify-center">
            <div className="w-full max-w-[1600px] md:w-[100%]">
              <Swiper
                modules={[Pagination, Autoplay]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                spaceBetween={10}
                slidesPerView={1}
                className={`h-full rounded-lg shadow-lg ${s.swiper}`}
              >
                {bannerImages.map((image, index) => (
                  <SwiperSlide className="h-auto" key={index}>
                    <img
                      alt={image.alt}
                      className="w-full h-full object-contain rounded-lg"
                      src={image.src}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </section>
        <section className="relative py-10">
          <div className="grid">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Album Phóng Sự Cưới</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Hima Wedding Film, qua ống kính đầy cảm xúc, lưu giữ trọn vẹn
                  những khoảnh khắc yêu thương và viết nên câu chuyện hạnh phúc
                  vĩnh cửu của bạn.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 w-full md:w-[85%] m-auto rounded-lg">
              <div className="album_img flex flex-wrap justify-start pt-12 p-2">
                {albumImages.slice(0, showMore ? albumImages.length : 8).map(
                  (image, index) => (
                    <div
                      className="img p-1 flex justify-center items-center w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
                      key={index}
                    >
                      <div className="w-full h-full flex justify-center items-center relative group">
                        <img
                          onClick={() => handleOpen(image)}
                          src={image.src}
                          alt={image.alt}
                          className="object-cover w-full h-[300px] rounded-lg"
                        />
                      </div>
                    </div>
                  )
                )}
              </div>
              <button
                onClick={toggleShowMore}
                className="py-4 text-blue-600 hover:no-underline"
              >
                <p className="text-gray-600 hover:text-gray-800 text-lg font-bold break-normal">
                  {showMore ? "...Thu gọn" : "Xem thêm..."}
                </p>
              </button>
            </div>
          </div>
        </section>
        {/* Video */}
        <section className="relative py-10">
          <div className="grid">
            <div className="flex flex-wrap justify-center text-center">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">Video Graphics</h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  Quay phim cưới HD – Hãy để Hima Wedding Film ghi lại những
                  khoảnh khắc hạnh phúc nhất trong đời bạn!
                </p>
              </div>
            </div>
            <div className="video flex justify-center pt-12">
              <iframe
                src="https://www.youtube.com/embed/QndF5igzv6I"
                className="w-full md:w-[90%] lg:w-[60%] h-[250px] md:h-[450px] lg:h-[650px] align-middle rounded-t-lg"
                title="Video: Hima Wedding Film - Sample Video"
                aria-label="Embedded video showing sample wedding film"
                role="region"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  top: 0,
                  left: 0,
                  borderRadius: "8px",
                }}
              ></iframe>
            </div>
          </div>
        </section>
        <section className="pt-16 pb-12 md:pb-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center text-center mb-12 md:mb-18">
              <div className="w-full lg:w-6/12 px-4">
                <h2 className="text-4xl font-semibold">
                  Đây là những chuyên gia của chúng tôi
                </h2>
                <p className="text-lg leading-relaxed m-4 text-gray-600">
                  ...những chuyên gia có uy tín trong ngành, đội ngũ sáng tạo
                  của chúng tôi...
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="md:flex md:w-9/12 justify-center">
                <div className="w-full md:w-6/12 lg:mb-0 mb-12 px-4">
                  <div className="px-6">
                    <img
                      alt="Nguyễn Thế Anh"
                      src="https://res.cloudinary.com/ddj3vx8q3/image/upload/v1731556035/Profile_pluscq.jpg"
                      className="w-[120px] h-[120px] object-cover shadow-lg rounded-full max-w-full mx-auto"
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Nguyễn Thế Anh</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        Photographer / Camerman
                      </p>
                      <div className="mt-6 flex justify-center gap-3">
                        <li className="flex items-center">
                          <a
                            className=""
                            href="https://www.facebook.com/nguyentheanh2002"
                          >
                            <IconFB width="22" height="22" color="#2563eb" />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <a
                            className=""
                            href="mailto:nguyentheanh14072002@gmail.com"
                          >
                            <IconMailColor width="22" height="22" />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <a className="" href="tel:0923239468">
                            <IconPhone width="22" height="22" color="#00ad59" />
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
                      src="https://res.cloudinary.com/ddj3vx8q3/image/upload/v1731555687/448719003_2195249794166685_3453710915303333008_n_q3uhlt.jpg"
                      className="shadow-lg rounded-full max-w-full mx-auto"
                      style={{ maxWidth: 120 }}
                    />
                    <div className="pt-6 text-center">
                      <h5 className="text-xl font-bold">Trần Thị Yến</h5>
                      <p className="mt-1 text-sm text-gray-500 uppercase font-semibold">
                        Makeup / Mua
                      </p>
                      <div className="mt-6 flex justify-center gap-3">
                        <li className="flex items-center">
                          <a
                            className=""
                            href="https://www.facebook.com/tranthiiyen"
                          >
                            <IconFB width="22" height="22" color="#2563eb" />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <a
                            className=""
                            href="mailto:tranthiyen25012000@gmail.com"
                          >
                            <IconMailColor width="22" height="22" />
                          </a>
                        </li>
                        <li className="flex items-center">
                          <a className="" href="tel:0968389058">
                            <IconPhone width="22" height="22" color="#00ad59" />
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
          <div className="container mx-auto px-4.5 pb-20 pt-8 lg:pt-16 lg:pb-60">
            <div className="flex flex-wrap mt-8 justify-center md:py-0.5 py-8">
              <div className="w-full lg:w-3/12 px-6 pt-2 text-center">
                <div className="text-white p-1 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-white">
                  <IconWeChat width="24" height="24" />
                </div>
                <h6 className="text-xl mt-3 font-semibold text-white">
                  TƯ VẤN
                </h6>
                <p className="mt-2 mb-4 text-gray-500">
                  Liên hệ ngay để được đội ngũ chuyên viên của chúng tôi hỗ trợ
                  tận tình và giải đáp mọi thắc mắc của bạn.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-6 pt-2 text-center">
                <div className="text-white p-1 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-white">
                  <IconUsd width="24" height="24" />
                </div>
                <h5 className="text-xl mt-3 font-semibold text-white">
                  BÁO GIÁ
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Cần báo giá? Chúng tôi sẽ cung cấp thông tin chi tiết và rõ
                  ràng ngay khi bạn liên hệ.
                </p>
              </div>
              <div className="w-full lg:w-3/12 px-6 pt-2 text-center">
                <div className="text-white p-1 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-white">
                  <IconStar width="24" height="24" />
                </div>
                <h5 className="text-xl mt-3 font-semibold text-white">
                  ĐÁNH GIÁ
                </h5>
                <p className="mt-2 mb-4 text-gray-500">
                  Hãy để lại đánh giá, chúng tôi sẽ phản hồi nhanh nhất. Ý kiến
                  của bạn là động lực lớn cho chúng tôi!
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-gray-900">
          <form
            className="container mx-auto px-4"
            onSubmit={handleSubmit(handleSubmitForm)}
          >
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                  <div className="flex-auto p-4 md:p-5 lg:p-10">
                    <h4 className="text-2xl font-semibold">
                      Thông tin liên hệ
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                      Hãy để lại thông tin của bạn, chũng tôi sẽ liên hệ bạn
                      ngay!
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block text-left uppercase text-gray-700 text-xs font-bold mb-2 ml-2"
                        htmlFor="full-name"
                      >
                        Họ tên
                      </label>
                      <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Nhập họ tên bạn",
                        }}
                        render={({ field }) => (
                          <ForwardedInput
                            {...field}
                            type="text"
                            placeholder={"Họ tên bạn"}
                            className={
                              "border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            }
                            style={{ transition: "all 0.15s ease 0s" }}
                            hasError={!!errors?.name?.message}
                          />
                        )}
                      />
                      <ErrorTooltip
                        errorMessage={errors?.name?.message}
                        hasError={!!errors?.name?.message}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-left uppercase text-gray-700 text-xs font-bold mb-2 ml-2"
                        htmlFor="phone"
                      >
                        Số điện thoại
                      </label>
                      <Controller
                        name="phone"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Nhập số điện thoại",
                          pattern: {
                            value: REGEX.VALIDATE_PHONE,
                            message: "Số điện thoại không hợp lệ",
                          },
                        }}
                        render={({ field }) => (
                          <ForwardedInput
                            {...field}
                            type="text"
                            placeholder={"Số điện thoại của bạn"}
                            className={
                              "border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            }
                            style={{ transition: "all 0.15s ease 0s" }}
                            hasError={!!errors?.phone?.message}
                          />
                        )}
                      />
                      <ErrorTooltip
                        errorMessage={errors?.phone?.message}
                        hasError={!!errors?.phone?.message}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block text-left uppercase text-gray-700 text-xs font-bold mb-2 ml-2"
                        htmlFor="message"
                      >
                        Lời nhắn
                      </label>
                      <Controller
                        name="message"
                        control={control}
                        defaultValue=""
                        rules={{
                          required: "Vui lòng nhập tin nhắn của bạn",
                        }}
                        render={({ field }) => (
                          <textarea
                            {...field}
                            placeholder="Nhập tin nhắn của bạn"
                            className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                            style={{ transition: "all 0.15s ease 0s" }}
                          />
                        )}
                      />
                      <ErrorTooltip
                        errorMessage={errors?.message?.message}
                        hasError={!!errors?.message?.message}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded-full shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="submit"
                        style={{ transition: "all 0.15s ease 0s" }}
                        disabled={state.submitting}
                      >
                        Gửi ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
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
            <div className="w-full lg:w-6/12 px-4 m-auto">
              <h4 className="text-2xl md:text-3xl font-semibold">
                Hãy giữ liên lạc với chúng tôi!
              </h4>
              <h5 className="text-sm md:text-lg mt-0 mb-2 text-gray-700">
                Tìm chúng tôi trên bất kỳ nền tảng nào sau đây, chúng tôi sẽ
                phản hồi trong vòng 24h làm việc.
              </h5>
              <div className="flex justify-center gap-4 mt-6 pb-4">
                <div className="">
                  <a
                    className=""
                    href="https://www.facebook.com/profile.php?id=61557647955666"
                  >
                    <IconFB width="28" height="28" color="#2563eb" />
                  </a>
                </div>
                <div className="">
                  <a className="" href="mailto:himaweddingfilm@gmail.com">
                    <IconMailColor width="28" height="28" />
                  </a>
                </div>
                <div className="">
                  <a className="" href="tel:0923239468">
                    <IconPhone width="28" height="28" color="#00ad59" />
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-6/12 ">
              <MapComponent />
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-8/12 px-4 mx-auto text-center">
              <div className="flex text-xs md:text-sm text-gray-600 font-semibold py-1 justify-center">
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
      <ModalImages open={open} handleClose={handleClose}>
        {selectedImage && (
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="object-contain max-w-full max-h-full rounded-lg m-auto"
            style={{ maxHeight: "80vh", maxWidth: "80vw" }}
          />
        )}

        {/* Thumbnails */}
        {/* <div className="flex justify-start items-center gap-2 p-2 bg-white shadow-lg overflow-x-auto w-full">
          {Images_Album.map((image, index) => (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`w-20 h-20 object-cover rounded-lg cursor-pointer ${index === selectedImageIndex ? "border-2 border-blue-500" : ""} flex-shrink-0`}
              onClick={() => {
                setSelectedImageIndex(index); // Cập nhật chỉ số ảnh được chọn
                setSelectedImage(image); // Cập nhật ảnh được chọn
              }}
            />
          ))}
        </div> */}
      </ModalImages>
    </div>
  );
};

export default LandingPage;
