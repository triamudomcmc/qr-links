import type { NextPage } from "next";
import { getZoomData } from "src/lib/db-admin";

const Home: NextPage<{ data: any }> = ({ data }) => {
  if (!data)
    return (
      <>
        <p>loading...</p>
      </>
    );

  return (
    <>
      <main className="font-display py-8 w-full min-h-screen bg-[#373677] text-white flex flex-col items-center justify-center">
        <h1 className="py-4 font-semibold text-2xl">TUOPH2022 ZOOM Links</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-4">
          <div className="flex flex-col">
            <a
              target="_blank"
              href={data["sci-math"]}
              className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 my-2 px-8 shadow-sm bg-white text-black"
            >
              วิทย์-คณิต
            </a>
            <a
              target="_blank"
              href={data["arts-math"]}
              className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 my-2 px-8 shadow-sm bg-white text-black"
            >
              ศิลป์คำนวณ
            </a>
            <a
              target="_blank"
              href={data["arts-french"]}
              className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 my-2 px-8 shadow-sm bg-white text-black"
            >
              ศิลป์ฝรั่งเศส
            </a>
            <a
              target="_blank"
              href={data["arts-espanol"]}
              className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 my-2 px-8 shadow-sm bg-white text-black"
            >
              ศิลป์สเปน
            </a>
          </div>
          <div className="flex flex-col">
            <a
              target="_blank"
              href={data["arts-deutsch"]}
              className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 my-2 px-8 shadow-sm bg-white text-black"
            >
              ศิลป์เยอรมัน
            </a>
            <a
              target="_blank"
              href={data["arts-japan"]}
              className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 my-2 px-8 shadow-sm bg-white text-black"
            >
              ศิลป์ญี่ปุ่น
            </a>
            <a
              target="_blank"
              href={data["arts-korean"]}
              className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 my-2 px-8 shadow-sm bg-white text-black"
            >
              ศิลป์เกาหลี
            </a>
            <a
              target="_blank"
              href={data["arts-chinese"]}
              className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 my-2 px-8 shadow-sm bg-white text-black"
            >
              ศิลป์จีน
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  // Fetch data from external API
  const data = await getZoomData();

  // Pass data to the page via props
  return { props: { data } };
};

export default Home;
