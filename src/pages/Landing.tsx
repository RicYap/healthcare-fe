import "../index.css";

export default function Landing() {
  return (
    <div>
      <div className="bg-gray-200 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight textColor sm:text-5xl md:text-6xl">
              <span className="block">Your Health,</span>
              <span className="block text-blue-600">Clearly Tracked</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-600 dark:text-gray-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Visualize and manage your lab results with our intuitive
              dashboard. Track glucose, cholesterol, and blood pressure over
              time to better understand your health.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md">
                <a
                  href="/signup"
                  className="w-full flex items-center justify-center px-8 py-3 font-medium rounded-md text-white bg-blue-600 transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 md:py-4 md:text-lg md:px-10"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="features" className="py-12 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight textColor sm:text-4xl">
              Comprehensive Health Tracking
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-400 lg:mx-auto">
              All the tools you need to monitor your key health metrics
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium textColor">
                    Interactive Charts
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    Visualize your lab results with beautiful, interactive
                    charts that make trends easy to spot.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <i className="fas fa-vial text-xl"></i>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium textColor">
                    Multiple Metrics
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    Track glucose, cholesterol (total, LDL, HDL), and blood
                    pressure all in one place.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <i className="fas fa-mobile-alt text-xl"></i>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium textColor">
                    Mobile Friendly
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    Access your health data anywhere with our fully responsive
                    design.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  <i className="fas fa-shield-alt text-xl"></i>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium textColor">
                    Secure Storage
                  </h3>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    Your data is protected with industry-standard security
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 bg-gray-200 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-8">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Dashboard Preview
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight textColor sm:text-4xl">
              See Your Health at a Glance
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-inner">
            <div className="bg-gray-200 dark:bg-gray-900 p-4 rounded-md shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Your Lab Results</h3>
                <div className="text-sm text-gray-600 dark:text-gray-400">Last updated: Today</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-gray-500 rounded-md p-4 ">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Blood Glucose (mg/dL)</h4>
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                      Normal
                    </span>
                  </div>
                  <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                    <i className="fas fa-chart-bar text-4xl text-gray-300"></i>
                  </div>
                </div>
                <div className="border border-gray-500 rounded-md p-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium">Cholesterol (mg/dL)</h4>
                    <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
                      Good
                    </span>
                  </div>
                  <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                    <i className="fas fa-chart-pie text-4xl text-gray-300"></i>
                  </div>
                </div>
              </div>

              <div className="border border-gray-500 rounded-md p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium">Blood Pressure (mmHg)</h4>
                  <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    Monitor
                  </span>
                </div>
                <div className="h-48 bg-gray-50 rounded flex items-center justify-center">
                  <i className="fas fa-chart-line text-4xl text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="how-it-works" className="py-12 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              How It Works
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight textColor sm:text-4xl">
              Simple Steps to Better Health Tracking
            </p>
          </div>

          <div className="mt-10">
            <div className="relative">
              <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-gray-200 transform -translate-x-1/2"></div>

              <div className="md:flex md:items-center md:justify-between mb-8">
                <div className="md:w-5/12 md:pr-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <h3 className="ml-4 text-lg leading-6 font-medium textColor">
                      Sign Up Securely
                    </h3>
                  </div>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    Create your account with email and password. Your data is
                    protected with secure authentication.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:w-5/12">
                  <div className="bg-white p-6 rounded-lg shadow shadow-gray-400">
                    <i className="fas fa-user-plus text-4xl text-blue-500 mb-4"></i>
                    <p className="text-sm text-gray-600">
                      Simple registration process with email verification
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:flex md:items-center md:justify-between mb-8 flex-row-reverse">
                <div className="md:w-5/12 md:pl-8">
                  <div className="flex items-center ">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <h3 className="ml-4 text-lg leading-6 font-medium textColor">
                      Add Your Lab Results
                    </h3>
                  </div>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400 ">
                    Enter your latest test results manually or upload reports.
                    Our system handles irregular testing schedules.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:w-5/12">
                  <div className="bg-white p-6 rounded-lg shadow shadow-gray-400">
                    <i className="fas fa-edit text-4xl text-blue-500 mb-4"></i>
                    <p className="text-sm text-gray-600">
                      Easy data entry forms for all your lab metrics
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:flex md:items-center md:justify-between">
                <div className="md:w-5/12 md:pr-8">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <h3 className="ml-4 text-lg leading-6 font-medium textColor">
                      Visualize & Track Trends
                    </h3>
                  </div>
                  <p className="mt-2 text-base text-gray-600 dark:text-gray-400">
                    See your health metrics over time with clear visualizations
                    that highlight important trends and patterns.
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:w-5/12">
                  <div className="bg-white p-6 rounded-lg shadow shadow-gray-400">
                    <i className="fas fa-chart-line text-4xl text-blue-500 mb-4"></i>
                    <p className="text-sm text-gray-600">
                      Interactive charts that adapt to your data frequency
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-gray-200 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold textColor sm:text-4xl">
            <span className="block">
              Ready to take control of your health data?
            </span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-600 dark:text-blue-200">
            Join thousands of users who are tracking their lab results with
            HealthTrack.
          </p>
          <a
            href="/signup"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3  rounded-md text-gray-900 dark:text-blue-600 bg-white transition duration-500 ease-in-out hover:-translate-y-1 hover:scale-110 sm:w-auto"
          >
            Get Started for Free
          </a>
        </div>
      </div>
    </div>
  );
}
