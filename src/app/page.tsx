"use client";
import React, { useState } from "react";
import Image from "next/image";
import hero from "@/assets/hero.png";
import i1 from "@/assets/i1.png";
import i2 from "@/assets/i2.png";
import i3 from "@/assets/i3.png";
import i4 from "@/assets/i4.png";
import srv1 from "@/assets/srv1.png";
import srv2 from "@/assets/srv2.png";
import person from "@/assets/person.png";

const Home = () => {
  const services = [
    { name: "بيع اللوحات", image: i1 },
    { name: "بيع سيارات", image: i2 },
    { name: "أسئلة ذكية", image: i3 },
    { name: "المدربين", image: i4 },
  ];
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    "حصص قيادة لمدة 60 دقيقة",
    "حصص على الطريق الأسبوعي 2",
    "وقت إضافي",
    "تقييم لمستوى القيادة",
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep((prev) => prev - 1);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative w-full h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${hero.src})` }}
      >
        <div className="absolute inset-0 bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl sm:text-6xl text-white font-bold text-center">
            قيادة أسهل، بيع أسرع، كل شيء في مكان واحد!
          </h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-10">
        <h2 className="text-2xl font-bold text-right mb-8">الخدمات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-20 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 text-center"
            >
              <Image
                src={service.image}
                alt={service.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-bold mb-4">{service.name}</h3>
              <p className="text-sm text-gray-600">وصف مختصر للخدمة.</p>
            </div>
          ))}
        </div>

        {/* Big Services Section */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 mt-8 items-center px-20">
          <div className="relative rounded-lg overflow-hidden h-[250px]">
            <Image
              src={srv1}
              alt="بيع السيارات"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-end text-white p-4">
              <h3 className="text-xl font-bold mb-1">بيع السيارات</h3>
              <p className="text-sm">
                نقدم لك مجموعة متنوعة من السيارات لتلبية احتياجاتك وتوفير أفضل
                العروض
              </p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden h-[250px]">
            <Image
              src={srv2}
              alt="تعلم القيادة"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0  bg-opacity-30 flex flex-col justify-end text-white p-4">
              <h3 className="text-xl font-bold mb-1">تعلم القيادة</h3>
              <p className="text-sm">
                كل خطوة تقوم بها نحو تحسين مهاراتك وزيادة ثقتك على الطريق
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscriptions Section */}
      <section className="py-12 px-10">
        <h2 className="text-2xl font-bold text-right mb-8">الاشتراكات</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-20">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">باقة مميزة</h3>
              <p className="text-lg font-bold mb-2 text-blue-700">1500 ج م</p>
              <div className="mb-4">
                {steps.map((step, i) => (
                  <div
                    key={i}
                    className={`flex items-center mb-2 ${
                      i <= activeStep ? "text-blue-700" : "text-gray-400"
                    }`}
                  >
                    <div
                      className={`w-2.5 h-2.5 rounded-full ${
                        i <= activeStep ? "bg-blue-700" : "bg-gray-400"
                      }`}
                    ></div>
                    <span className="ml-2">{step}</span>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <button
                  onClick={handleBack}
                  className="text-sm text-blue-700 disabled:text-gray-400"
                  disabled={activeStep === 0}
                >
                  السابق
                </button>
                <button
                  onClick={handleNext}
                  className="text-sm text-blue-700 disabled:text-gray-400"
                  disabled={activeStep === steps.length - 1}
                >
                  التالي
                </button>
              </div>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-full w-full mt-4">
                اشترك
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12 px-10">
        <h2 className="text-2xl font-bold text-right mb-8">تقييمات المدربين</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-20">
          {[...Array(3)].map((_, index) => (
            <div key={index} className="relative rounded-lg p-6 bg-[#ECF4F3]">
              <div className="bg-white shadow-lg rounded-lg p-6 relative">
                <div className="absolute -top-12 right-2">
                  <Image
                    src={person}
                    alt="Person"
                    className="w-20 h-20 rounded-full border-2 border-white"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-4 mb-2">
                  لوريم إيبسوم هو ببساطة نص وهمي من صناعة الطباعة والتنضيد. لقد
                  كان لوريم إيبسوم...
                </p>
                <span className="text-blue-700 text-sm cursor-pointer">
                  عرض المزيد
                </span>
                <div className="flex justify-between items-center mt-3">
                  <div className="text-yellow-500">⭐⭐⭐⭐⭐</div>
                  <div className="text-right">
                    <h4 className="text-gray-800 font-bold">أحمد علي</h4>
                    <span className="text-sm text-gray-500">محاسب</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
