"use client";
import React, { useState, useEffect } from "react";
import { Heading } from "@/components/ui/heading";
import axios from "axios";
import { Progress } from "@/components/ui/progress";

const Page = () => {
  const [data, setData] = useState({
    'performance': 0,
  });

  const [loading, setLoading] = useState(false); 

  const website = "https://keshavmalik.netlify.app/";

  const getStats = async () => {
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

  console.log(data)
  return (
    <div className="p-4">
      <Heading title={`Website Stats`} description="View your website stats" />
      <div>
        <button onClick={getStats} disabled={loading}>
          {loading ? "Loading..." : "Get Stats"}
        </button>
      </div>
      <div>
       
      </div>
      {loading && <div>Loading...</div>}{" "}
      <Progress value={data.performance*100} />
      {/* Render a loader if loading is true */}
    </div>
  );
};

export default Page;
