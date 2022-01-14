import type { NextPage } from "next";
import { getZoomData } from "src/lib/db-admin";

const element = (data: any, bname :string) => {
    console.log(data)
  return (
      <div className="flex flex-col bg-gray-300 rounded-lg px-4 bg-white text-black py-2">
        <h1>ID: {data.id}</h1>
        <h1>Password: {data.password}</h1>
        <a
            target="_blank"
            rel="noreferrer"
            href={data.link}
            className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 px-8 mt-2 shadow-sm bg-white text-black"
        >
          เข้า ZOOM {bname}
        </a>
      </div>
  )
}
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
        <div className="flex flex-col sm:flex-row items-center justify-center sm:space-y-0 space-y-2 space-x-0 sm:space-x-4">
          <div className="flex flex-col space-y-2">
            <div className="flex flex-col bg-gray-300 rounded-lg px-4 bg-white text-black py-2">
              <h1>ID: {data["sci-math"].id}</h1>
              <h1>Password: {data["sci-math"].password}</h1>
              <a
                  target="_blank"
                  rel="noreferrer"
                  href={data["sci-math"].link}
                  className="rounded-full hover:bg-gray-100 transition-colors text-center w-[250px] py-4 px-8 mt-2 shadow-sm bg-white text-black"
              >
                วิทย์-คณิต
              </a>
            </div>
            {element(data["arts-math"], "ศิลป์คำนวณ")}
            {element(data["arts-french"], "ศิลป์ฝรั่งเศส")}
            {element(data["arts-espanol"], "ศิลป์สเปน")}
          </div>
          <div className="flex flex-col space-y-2">
            {element(data["arts-deutsch"], "ศิลป์เยอรมัน")}
            {element(data["arts-japan"], "ศิลป์ญี่ปุ่น")}
            {element(data["arts-korea"], "ศิลป์เกาหลี")}
            {element(data["arts-china"], "ศิลป์จีน")}
          </div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps = async () => {
  // Fetch data from external API
  const data = await getZoomData();

  // Pass data to the page via props
  return { props: { data } };
};

export default Home;
