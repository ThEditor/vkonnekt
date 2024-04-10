import { LeftBar } from '../components/LeftBar';
import { BottomBar } from '../components/BottomBar';
import RightSideDots from '../components/RightSideDots';
import { FloatingNav } from '../components/ui/floating-navbar';
import { IconHome, IconMessage, IconUser } from '@tabler/icons-react';
import Link from 'next/link';

export default function Wiki() {
  const navItems = [
    {
      name: 'Home',
      link: '/',
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'About',
      link: '/about',
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: 'Contact',
      link: '/contact',
      icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];
  return (
    <div>
      <LeftBar selectedTab="Wiki" />
      <div className="flex flex-col justify-center gap-3 pt-14 sm:p-6 sm:pt-10 md:ml-24 lg:ml-64 lg:gap-12">
        {/* <FloatingNav navItems={navItems} /> */}
        <RightSideDots
          links={['section1', 'academics', 'campus-life', 'important-resources', 'stay-connected', 'conclusion']}
        />
        <VITWikiPage />
      </div>
      <BottomBar selectedTab="Wiki" />
    </div>
  );
}

const VITWikiPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <VITWikiHeader />

      <AcademicsSection />
      <CampusLifeSection />

      <ImportantResourcesSection />

      <StayConnectedSection />

      <ConclusionSection />
    </div>
  );
};

const VITWikiHeader = () => {
  return (
    <div id="section1" className="bg-gray-100 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">
        Vellore Institute of Technology (VIT) - Wiki for Current Students
      </h1>
      <p className="text-lg font-semibold text-gray-700 mb-2">
        Welcome VITians!
      </p>
      <p className="text-gray-800">
        This is your one-stop wiki for all things VIT, designed specifically for current students.
        Here you'll find information on various resources, academics, campus life, and more!
      </p>
    </div>
  );
};

const AcademicsSection = () => {
  return (
    <div className="mb-8" id="academics">
      <h2 className="text-2xl font-bold mb-4">Academics</h2>
      <p className="mb-4">At Vellore Institute of Technology (VIT), academics play a central role in shaping your educational journey. Here are some key aspects of the academic experience at VIT:</p>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">FFCS (Fully Flexible Credit System)</h3>
        <p className="mb-2">The <strong>Fully Flexible Credit System (FFCS)</strong> is a distinctive feature of VIT's academic structure. It empowers students with the flexibility to tailor their academic schedules according to their interests and career goals. Under FFCS, you have the freedom to choose subjects and professors based on your preferences and academic requirements.</p>
        <p className="mb-2">To explore the FFCS system further, you can visit the official <Link href="https://ffcsonthego.vatz88.in/"><span className="text-blue-500">FFCS portal</span></Link>.</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Schools and Programs</h3>
        <p className="mb-2">VIT encompasses various Schools offering a wide range of academic programs across different disciplines. Whether you are interested in engineering, management, law, or any other field, VIT provides comprehensive educational opportunities to suit your aspirations. You can explore the complete list of Schools and academic programs on the <Link href="https://vit.ac.in/"><span className="text-blue-500">official VIT website</span></Link>.</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Course Registration and Timetables</h3>
        <p className="mb-2">Course registration and managing timetables are crucial aspects of your academic journey at VIT. The university provides user-friendly portals and tools to facilitate the registration process and assist you in organizing your semester timetable efficiently. Access the course registration portals and timetable tools through the <Link href="https://vtop.vit.ac.in/"><span className="text-blue-500">VIT Online Portal (VTOP)</span></Link>.</p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">VIT Learning Management System (VLMS)</h3>
        <p className="mb-2">The <strong>VIT Learning Management System (VLMS)</strong> serves as a centralized platform for accessing course materials, submitting assignments, and engaging in communication with faculty members. VLMS enhances the learning experience by providing convenient access to resources and fostering interactive learning environments. You can access VLMS through the official <Link href="https://lms.vit.ac.in/"><span className="text-blue-500">VLMS portal</span></Link>.</p>
      </div>
    </div>
  );
};


const CampusLifeSection = () => {
  return (
    <div className="mb-8" id="campus-life">
      <h2 className="text-2xl font-bold mb-4">Campus Life</h2>
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Hostels and Accommodation</h3>
        <p className="mb-2">Information on living on campus, including hostel rules and facilities. <Link href="https://vit.ac.in/files/admissions/HostelAdmission_InformationSheet.pdf"><span className="text-blue-500">Link</span></Link></p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Student Clubs and Activities</h3>
        <p className="mb-2">Get involved in the vibrant campus life by joining clubs and activities that suit your interests. <Link href="https://vit.ac.in/campus-category/Clubs"><span className="text-blue-500">Link</span></Link></p>
      </div>
      
      <div className="mb-6">
        <h3 className="text-xl font-bold mb-2">Sports Facilities and Gyms</h3>
        <p className="mb-2">Learn about the various sports facilities and gyms available for student use. <Link href="https://vit.ac.in/campuslife/sports"><span className="text-blue-500">Link</span></Link></p>
      </div>
      
      <div>
        <h3 className="text-xl font-bold mb-2">Riviera - The Annual Cultural Fest</h3>
        <p className="mb-2">Don't miss Riviera, VIT's biggest annual cultural extravaganza. <Link href="https://riviera.vit.ac.in/"><span className="text-blue-500">Link</span></Link></p>
      </div>
    </div>
  );
};

const ImportantResourcesSection = () => {
  return (
    <div className="mb-8" id="important-resources">
      <h2 className="text-2xl font-bold mb-4">Important Resources</h2>
      <ul className="list-disc ml-6">
        <li className="mb-2">VIT Helpdesk: Get technical assistance and IT support. <Link href="https://vtop.vit.ac.in/"><span className="text-blue-500">Link</span></Link></li>
        <li className="mb-2">VIT Central Library: Access a vast collection of books, journals, and e-resources. <Link href="https://vit.ac.in/academics/library"><span className="text-blue-500">Link</span></Link></li>
        <li className="mb-2">Career and Placement Cell: Find support with career planning, internships, and placements. <Link href="https://vit.ac.in/cdc-office"><span className="text-blue-500">Link</span></Link></li>
        <li>Student Counselling Centre: Seek guidance and support for academic and personal concerns. <Link href="https://vit.ac.in/counselling-services"><span className="text-blue-500">Link</span></Link></li>
      </ul>
    </div>
  );
};

const StayConnectedSection = () => {
  return (
    <div className="mb-8" id="stay-connected">
      <h2 className="text-2xl font-bold mb-4">Stay Connected</h2>
      <ul className="list-disc ml-6">
        <li className="mb-2">The VITian (Official Student Newspaper): Stay updated on campus news and events. <Link href="https://www.drnaika.com/blog/a-haitian-treasure-vvenn-vervain"><span className="text-blue-500">Link</span></Link></li>
        <li>VIT Social Media Channels: Follow VIT on social media for announcements and updates. <Link href="https://www.facebook.com/vituniversity/"><span className="text-blue-500">Link</span></Link></li>
      </ul>
    </div>
  );
};

const ConclusionSection = () => {
  return (
    <div className="mb-8" id="conclusion">
      <p>This wiki is a work in progress! If you have any suggestions or information you'd like to add, feel free to reach out to the page maintainers (details to be added).</p>
      <p>We hope you find this resource helpful! Welcome to VIT and have a fantastic academic journey!</p>
    </div>
  );
};
