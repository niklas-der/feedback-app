import Container from "@/components/Container";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  return (
    <div className="bg-gray-800 md:bg-transparent md:mt-8 xl:basis-1/4 2xl:basis-1/5">
      <Container>
        <div className="md:flex md:justify-between xl:basis-auto space-x-3 xl:flex-col xl:space-x-0 xl:space-y-6">
          <div className="flex justify-between items-center py-8 md:p-12 md:py-16 md:bg-gray-800 rounded-lg">
            <div className="space-y-1">
              <h1 className="text-xl font-semibold md:text-2xl">
                Frontend Mentor
              </h1>
              <h2 className="text-sm md:text-md">Feedback Board</h2>
            </div>
            <div className="md:hidden">
              <GiHamburgerMenu size={32} />
            </div>
          </div>
          <div className="hidden md:flex flex-wrap basis-1/3 xl:basis-0 items-start gap-3 bg-white text-blue-700 font-semibold p-6 rounded-lg">
            <div className="py-2 px-4 bg-blue-100 rounded-lg">All</div>
            <div className="py-2 px-4 bg-blue-100 rounded-lg">UI</div>
            <div className="py-2 px-4 bg-blue-100 rounded-lg">UX</div>
            <div className="py-2 px-4 bg-blue-100 rounded-lg">Enhancement</div>
            <div className="py-2 px-4 bg-blue-100 rounded-lg">Bug</div>
            <div className="py-2 px-4 bg-blue-100 rounded-lg">Feature</div>
          </div>
          <div className="hidden md:block basis-1/3 xl:basis-0 text-black bg-white rounded-lg p-6 space-y-4">
            <div className="flex bg-white justify-between items-center space-x-6">
              <h1 className="font-bold text-xl">Roadmap</h1>
              <a href="#" className="text-blue-600 border-b-blue-600 border-b">
                View
              </a>
            </div>
            <div className="space-y-2 text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                <div className="w-full flex justify-between">
                  <h2>Planned</h2>
                  <h2 className="font-semibold">2</h2>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                <div className="w-full flex justify-between">
                  <h2>In-Progress</h2>
                  <h2 className="font-semibold">3</h2>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-orange-400 rounded-full mr-2"></div>
                <div className="w-full flex justify-between">
                  <h2>Live</h2>
                  <h2 className="font-semibold">1</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
