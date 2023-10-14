import FeatureCountdown from "@/Layouts/Components/FeatureCountdown";
import Navbar from "@/Layouts/Components/Navbar";
import { Head } from "@inertiajs/react";

export default function Contact() {
  return (
    <>
      <Head title="About" />
      <Navbar />

      <FeatureCountdown targetDate={'2023-10-23T23:59:59'} />
    </>
  )
}