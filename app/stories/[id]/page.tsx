import FooterSection from '@/components/Layouts/Footer';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function StoryArticlePage() {
  // Demo data
  const article = {
    title: 'AI Revolutionizes Business: The Next Big Leap',
    subtitle: 'How artificial intelligence is transforming industries and driving innovation in companies worldwide.',
    author: 'John Doe',
    date: 'May 25, 2025',
    cover: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80',
    body: `
      <p>Artificial intelligence (AI) is no longer a futuristic concept—it's a present-day reality that is reshaping the way businesses operate. Across industries and organizational scales, AI is becoming a cornerstone of innovation, efficiency, and competitive differentiation. From automating routine tasks such as data entry and customer service inquiries to powering advanced analytics platforms that derive strategic insights from massive datasets, AI is empowering companies to achieve more with fewer resources and less time.</p>

<p>The acceleration of AI adoption is driven by its capacity to enhance operational precision and reduce human error. Tasks that once required large teams and manual oversight can now be managed by intelligent systems that learn and adapt over time. Whether it's a logistics firm optimizing delivery routes using real-time traffic predictions, or a media company recommending personalized content through user behavior analysis, AI is at the core of digital transformation strategies worldwide.</p>

<p>One of the most significant impacts of AI is in decision-making. With the integration of machine learning algorithms, businesses can detect patterns, assess risks, and make informed decisions with unprecedented speed and accuracy. These models can forecast market trends based on historical data, optimize inventory and supply chains by predicting demand fluctuations, and personalize customer experiences at scale by analyzing purchasing behavior, browsing patterns, and social interactions. Such capabilities enable organizations to respond to market changes proactively, instead of reactively, gaining a strategic edge.</p>

<h2>Transforming Industries</h2>

<p>Industries such as healthcare, finance, and agriculture are leveraging AI to solve complex, high-stakes challenges. In healthcare, AI is being used to interpret medical images, identify genetic markers of disease, assist in surgical procedures, and manage patient data securely. Natural language processing (NLP) allows AI to read and summarize clinical notes, improving diagnosis accuracy and treatment planning. In some cases, AI-powered tools are even helping predict patient deterioration in real time, enabling faster interventions and saving lives.</p>

<p>In finance, AI is used not only for fraud detection but also for portfolio management, credit scoring, and algorithmic trading. Intelligent bots handle customer service requests, while predictive models assess financial risk with greater nuance than traditional scoring methods. Regulatory technology (RegTech) powered by AI is also helping institutions comply with ever-evolving financial laws through automated reporting and anomaly detection.</p>

<p>In agriculture, AI is revolutionizing how we understand and manage land. From satellite imagery analysis that maps crop health to sensor-based monitoring systems that track soil moisture, AI tools are empowering farmers to make precise, data-informed decisions. Drones equipped with AI vision can detect pest outbreaks early, while machine learning models predict optimal planting and harvesting times. These innovations are particularly crucial in the face of climate change, where traditional farming methods often fall short.</p>

<p>Other sectors are not far behind. In manufacturing, AI is facilitating predictive maintenance, optimizing production schedules, and improving quality assurance through visual inspection. In education, AI is personalizing learning pathways for students and automating administrative tasks for educators. In entertainment and marketing, content generation and audience targeting have been transformed by AI's ability to model human preferences at scale.</p>

<h2>The Road Ahead</h2>

<p>As AI technology continues to evolve rapidly, its integration into business processes will only deepen. The trajectory points toward a future in which AI doesn't just support human decisions—it co-creates, collaborates, and even anticipates business needs autonomously. With the rise of generative AI, large language models, and multimodal systems, businesses are finding new ways to automate content creation, simulate scenarios, and interface with customers in lifelike ways.</p>

<p>However, this transformation brings not only opportunity but responsibility. Ethical considerations such as data privacy, algorithmic bias, transparency, and accountability are more important than ever. As AI systems take on more roles in critical domains like justice, finance, and health, organizations must implement strong governance policies, conduct regular audits, and ensure that human oversight remains in the loop.</p>

<p>Moreover, workforce transformation must go hand-in-hand with technological adoption. As AI automates more tasks, the demand for new skills—such as data literacy, algorithmic understanding, and human-machine collaboration—will grow. Companies that invest in upskilling their employees and embedding AI literacy into their culture will be better positioned to harness its full potential.</p>

<p>Ultimately, AI is not just a tool—it's a strategic capability. Companies that adopt AI thoughtfully and proactively today are setting the foundation for long-term resilience and innovation. In a world that's becoming increasingly digital, interconnected, and fast-moving, leveraging the power of AI will be a defining factor for sustainable success in the decades to come.</p>
    `
  };

  return (
    <>
      <main className="min-h-screen w-full bg-[#10131A] pb-16 pt-32 sm:pt-40">
        <article className="max-w-3xl mx-auto px-4 sm:px-8">
          <h1 className="text-white text-3xl sm:text-5xl font-bold mb-4 leading-tight">{article.title}</h1>
          <h2 className="text-gray-300 text-xl sm:text-2xl font-medium mb-6 leading-snug">{article.subtitle}</h2>
          {/* Share Buttons */}
          <div className="flex gap-3 mb-8">
            {[
              {
                icon: <FaFacebookF />, label: 'Facebook',
                getUrl: (url: string, title: string) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
              },
              {
                icon: <FaTwitter />, label: 'Twitter',
                getUrl: (url: string, title: string) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`
              },
              {
                icon: <FaLinkedinIn />, label: 'LinkedIn',
                getUrl: (url: string, title: string) => `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`
              },
              {
                icon: <FaWhatsapp />, label: 'WhatsApp',
                getUrl: (url: string, title: string) => `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`
              },
            ].map((btn, idx) => {
              const url = typeof window !== 'undefined' ? window.location.href : 'https://stelarhub.com/stories/1';
              return (
                <a
                  key={btn.label}
                  href={btn.getUrl(url, article.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Bagikan ke ${btn.label}`}
                  className="bg-[#18181C] hover:bg-primary/20 text-white rounded-full p-3 shadow transition flex items-center justify-center text-lg"
                >
                  {btn.icon}
                </a>
              );
            })}
          </div>
          <div className="flex items-center gap-4 mb-8 text-gray-400 text-sm">
            <span>By {article.author}</span>
            <span className="w-1 h-1 bg-gray-500 rounded-full inline-block"></span>
            <span>{article.date}</span>
          </div>
          <div className="w-full aspect-[16/7] relative rounded-2xl overflow-hidden mb-10">
            <Image src={article.cover} alt={article.title} fill className="object-cover w-full h-full" unoptimized />
          </div>
          <div className="prose prose-invert prose-p:mb-6 max-w-none text-lg leading-relaxed" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }} dangerouslySetInnerHTML={{ __html: article.body }} />
        </article>
      </main>

      <FooterSection />
    </>
  );
} 