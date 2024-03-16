"use client";
import React, { useState, useEffect } from "react";
import { Heading } from "@/components/ui/heading";
import axios from "axios";
import { Progress } from "@/components/ui/progress";
import { useUser } from "@/context/userContext";

const Page = () => {
  const { userData } = useUser();
  const [data, setData] = useState({
    performance: 0,
  });

  const [loading, setLoading] = useState(false);

  const getStats = async () => {
    const website = userData.companyWebsite;
    console.log(website);
    setLoading(true);
    try {
      const res = await axios.get(
        `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${website}&key=AIzaSyAYQp12AIJQRRbjth08OlIWcX4cfISocsY`
      );
      setData({
        performance: res.data.lighthouseResult.categories.performance.score,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <Heading title={`Website Stats`} description="View your website stats" />
      <div className="flex items-center justify-center mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={getStats}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Stats"}
        </button>
        {loading && (
          <div className="ml-4 border border-blue-500 rounded-full border-t-4 border-b-4 border-r-4 border-l-4 h-10 w-10 animate-spin"></div>
        )}
      </div>
      <div>
        <Progress value={data.performance * 100} />
      </div>
    </div>
  );
};

export default Page;
