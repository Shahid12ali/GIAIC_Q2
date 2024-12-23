'use client';
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const Karachi = () => {
    const router = useRouter();
  return (
    <div className="text-center">
      <h1 className="text-4xl font-serif font-bold">Karachi The City Of Lights</h1>
      <br />
      <div className="flex">
        <hr />
        <br />
        <Image src="/images/krk.jpg"alt="khi"width={440}height={300} className="mx-0.5"></Image>
        <Image src="/images/krk3.jpg"alt="khi3"width={440}height={300}className="mx-0.5"></Image>
        <Image src="/images/krk2.jpg"alt="khi2"width={440}height={300}className="mx-0.5"></Image>
      </div>
       <br />
       <hr />
       <h1 className="text-4xl font-serif font-bold">Karachi Pakistan</h1>
       <br />
       <p className="text-2xl font-sans text-justify m-4"> 
        Karachi is not commonly referred to as the "City of Light." The nickname
        "City of Lights" is actually associated with Paris, France. Paris earned
        this nickname due to its early adoption of street lighting during the
        19th century, which made the city shine brightly at night. Karachi, on
        the other hand, is often referred to as the "City of Quaid" or the "City
        of the Quaid-e-Azam," in honor of Muhammad Ali Jinnah, the founder of
        Pakistan, who is also known as Quaid-e-Azam (Great Leader). Karachi
        holds historical significance as it was the capital of Pakistan until
        Islamabad took over that role in 1960. It remains the largest and most
        populous city in Pakistan, serving as an economic and cultural hub.
        Karachi is called the "City of Lights" because of its lively and vibrant
        nightlife. The city is known for its bustling streets, vibrant markets,
        and bustling nightlife. Additionally, the nickname may also be a
        reference to the city's history as a center of trade and commerce, which
        has led to it being a bright and shining beacon in Pakistan.
      </p>
      <br />
      <hr />
      <br />
      <h1 className="text-4xl font-serif font-bold">Karachi The Heart Of Sindh</h1>
      <br />
      <div className="flex flex-wrap ">
        <br />
        <Image src="/images/Mazar-e-Quaid-e-Azam.jpg"alt="mazareqaid"width={440}height={300}className="mx-0.5 mb-1"></Image>
        
        <Image src="/images/Mohatta Palace Museiuam.jpg"alt="-palace"width={440}height={300}className="mx-0.5 mb-1"></Image>
        
        <Image src="/images/Pakistan Air Force Museum.jpg"alt="PAFM"width={440}height={300}className="mx-0.5 mb-1"></Image>
        <br />
        <Image src="/images/Frere Hal.jpg"alt="frere-hal"width={440}height={300}className="mx-0.5"></Image>
        
        <Image src="/images/Clifton Beach, Karach.jpg"alt="clifton"width={440}height={300}className="mx-0.5"></Image>
        
        <Image src="/images/download.jpg"alt="charminar"width={440}height={300}className="mx-0.5"></Image>
        <br />
        <hr />
        <p className="text-2xl font-sans text-justify m-4">
          is the capital city of the Pakistani province of Sindh. It is the
          largest city in Pakistan and 12th largest in the world, with a
          population of over 20 million.It is situated at the southern tip of
          the country along the Arabian Sea coast and formerly served as the
          capital of Pakistan. Ranked as a beta-global city, 1920 it is
          Pakistan's premier industrial and financial centre, with an estimated
          GDP of over $200 billion (PPP) as of 2021. Karachi is Pakistan's most
          cosmopolitan city, linguistically, ethnically, and religiously diverse
          cities, as well as one of the most socially liberal. The region has
          been inhabited for millennia,[26] but the city was formally founded as
          the fortified village of Kolachi as recently as 1729.The settlement
          greatly increased in importance on arrival of the East India Company
          in the mid-19th century. British administrators embarked on
          substantial projects to transform the city into a major seaport, and
          connect it with the extensive railway network of the Indian
          subcontinent. At the time of Pakistan's independence in 1947, the city
          was the largest in Sindh with an estimated population of 400,000
          people.Afterwards, the city experienced a dramatic shift in population
          and demography with the arrival of hundreds of thousands of Muslim
          immigrants Muhajirs from India,coupled with a substantial exodus of
          its Hindu residents.The city experienced rapid economic growth
          following Pakistan's independence, attracting migrants from throughout
          the country and other regions in South Asia.According to the 2017
          Census of Pakistan, Karachi's total population was 16,051,521, with
          14.9 million of those people residing in the urban areas of the city.
          Karachi is one of the world's fastest-growing cities, and has
          significant communities representing almost every ethnic group in
          Pakistan. Karachi holds more than two million Bengali immigrants, a
          million Afghan refugees, and up to 400,000 Rohingyas from Myanmar.
          Karachi is now Pakistan's premier industrial and financial centre. The
          city has a formal economy estimated to be worth $190 billion as of
          2021, which is the largest in the country.Karachi collects 35% of
          Pakistan's tax revenue, and generates approximately 25% of Pakistan's
          entire GDP. Approximately 30% of Pakistani industrial output is from
          Karachi, while Karachi's ports handle approximately 95% of Pakistan's
          foreign trade. Approximately 90% of the multinational corporations and
          100% of banks operating in Pakistan are headquartered in Karachi. It
          also serves as a transport hub, and contains Pakistan's two largest
          seaports, the Port of Karachi and Port Qasim, as well as Pakistan's
          busiest airport, Jinnah International Airport. Karachi is also
          considered to be Pakistan's fashion capital, and has hosted the annual
          Karachi Fashion Week since 2009. Known as the "City of Lights" in the
          1960s and 1970s for its vibrant nightlife, Karachi was beset by sharp
          ethnic, sectarian, and political conflict in the 1980s with the
          large-scale arrival of weaponry during the Soviet–Afghan War. The city
          had become well known for its high rates of violent crime, but
          recorded crimes sharply decreased following a crackdown operation
          against criminals, the MQM political party, and Islamist militants,
          initiated in 2013 by the Pakistan Rangers. As a result of the
          operation, Karachi dropped from being ranked the world's 6th-most
          dangerous city for crime in 2014, to 128th by 2022.
        </p>
      </div>
      <button className="bg-blue-950 px-2 py-2 rounded text-white" onClick={() => router.push("/")}>Back To Home Page</button>   
    </div>
  );
};

export default Karachi;
