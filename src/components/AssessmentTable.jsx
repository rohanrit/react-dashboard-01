import { PiCheckLight, PiCheckCircleFill, PiCheckCircleLight } from "react-icons/pi";
import RadioCheck from "./RadioCheck";

const AssessmentTable = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="bg-white text-sm text-gray-500 font-bold px-5 py-2 shadow border-b border-gray-300">
        Tracking events
      </div>
      <div
        className="w-full h-full overflow-auto shadow bg-white"
        id="journal-scroll"
      >
        <div className="w-full">
          <div
            className="relative flex justify-center alien-center transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="px-2 py-2 whitespace-no-wrap text-left grow ">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
            <div className="px-2 pt-5 whitespace-no-wrap">
                          <div className="flex gap-3">
                              <RadioCheck />
                <PiCheckCircleFill className="text-2xl" />
                <PiCheckCircleLight className="text-2xl" />
                <input type="checkbox" name="weekly" className="defaultCheckbox relative flex h-[20px] min-h-[20px] w-[20px] min-w-[20px] appearance-none items-center justify-center rounded-xl border border-gray-300 text-gray-800/0 outline-none transition duration-[0.2s] checked:border-gray-800 checked:text-gray-800 hover:cursor-pointer dark:border-white/10 checked:bg-brand-500 dark:checked:bg-brand-400" />
                    <PiCheckLight />
                </div>
                <div className="relative">
                    <button className="absolute right-0 p-1 mt-1 text-red-400 fill-current select-none cursor-pointer hover:bg-red-200 hover:rounded-lg active:bg-red-400
                    fa fa-trash">
                        <PiCheckCircleFill className="text-2xl" />
                    </button>

                    <input className="hidden" type="checkbox" id="task_1" checked="" />
                    <label className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100" for="task_1">
                        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
                        <PiCheckCircleFill className="text-2xl" />
                        </span>
                        <span className="ml-4 text-sm">Weed front garden.</span>
                    </label>
                </div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
          <div
            className="relative transform scale-100
text-xs py-1 border-b-2 border-blue-100 cursor-default"
          >
            <div className="pl-5 pr-3 whitespace-no-wrap">
              <div className="text-gray-400">24 jule</div>
              <div>07:45</div>
            </div>
            <div className="px-2 py-2 whitespace-no-wrap">
              <div className="leading-5 text-gray-500 font-medium">
                Taylor Otwel
              </div>
              <div className="leading-5 text-gray-900">
                Create pull request #1213
                <a className="text-blue-500 hover:underline" href="#">
                  #231231
                </a>
              </div>
              <div className="leading-5 text-gray-800">Hello message</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssessmentTable;
