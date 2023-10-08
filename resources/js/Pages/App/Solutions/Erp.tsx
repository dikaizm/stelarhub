import FeatureCountdown from "@/Layouts/Components/FeatureCountdown";
import Navbar from "@/Layouts/Components/Navbar";
import { Service } from "@/types";
import { Head } from "@inertiajs/react";

//@ts-ignore
import ReactRotatingText from 'react-rotating-text';

export default function Erp({ data }: { data: Service }) {
  return (
    <>
      <Head title="" />
      <Navbar />

      <FeatureCountdown targetDate={'2023-10-10T23:59:59'} />

      <div>
        <ReactRotatingText items={['first', 'second', 'third']} />
        <span>.com</span>
      </div>
    </>
  )
}
