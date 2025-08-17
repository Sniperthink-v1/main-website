'use client'

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PrivacyPolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyPolicyModal({ isOpen, onClose }: PrivacyPolicyModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div 
            className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
          
          {/* Modal */}
          <motion.div 
            className="relative w-full max-w-4xl max-h-[90vh] mx-4 bg-black border border-gray-700 rounded-lg overflow-hidden"
            initial={{ 
              opacity: 0, 
              scale: 0.9, 
              y: 20 
            }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              y: 0 
            }}
            exit={{ 
              opacity: 0, 
              scale: 0.9, 
              y: 20 
            }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-700">
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
              <motion.button
                onClick={onClose}
                className="text-gray-400 hover:text-white transition-colors p-2"
                aria-label="Close modal"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
            </div>

            {/* Content */}
            <motion.div 
              className="overflow-y-auto max-h-[calc(90vh-120px)] p-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="prose prose-lg max-w-none prose-invert">
                <p className="mb-6 text-white">
                  <strong>Effective Date:</strong> <em className="text-gray-300">[Insert the date when the privacy policy would be published on the Platform/Website].</em>
                </p>

                <p className="mb-6 text-white">
                  The given privacy policy ("Privacy Policy") is to be read in conjunction with the Terms of Use as displayed on Our Platform/Website and establishes a legally binding agreement between the User and <em className="text-gray-300">[Insert name of the Company]</em> ("The Company"/"Sniperthink").
                </p>

                <p className="mb-6 text-white">
                  Any reference in the form of "we", "us" and "our" would hereinafter refer to the Company. Any person who accesses or uses the Platform/Website shall be termed as the "User", any reference to "You", "Their", "Them" shall hereinafter refer to the User.
                </p>

                <p className="mb-6 text-white">
                  Your access and/or usage of the Platform/Website indicates that you have read, understood and agreed in full to this Privacy Policy.
                </p>

                <p className="mb-6 text-white">
                  In the pursuance of our legal commitments, we have drafted and displayed this Privacy Policy and You agree that any information You share with us, is only after voluntarily consenting to this Privacy Policy.
                </p>

                <p className="mb-6 text-white">
                  If You do not agree with this Privacy Policy, then please do not access or use the Platform/Website
                </p>

                {/* Section 1 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">What Personal Information May Be Collected</h2>
                <p className="mb-4 text-white">
                  In the course of providing services, the Company may have to collect certain Personal Information from you. This information would, <em className="text-gray-300">inter alia</em>, include the following:
                </p>

                <ol className="list-decimal pl-6 mb-6 space-y-2 text-white">
                  <li>
                    <strong>Personal Details:</strong> The Company may collect personal details including but not limited to name and age.
                  </li>
                  <li>
                    <strong>Contact information:</strong> The Company may collect any contact information from You including but not limited to your address, email and telephone number.
                  </li>
                  <li>
                    <strong>Information to provide the services:</strong> The Company may collect information such as objective of procuring the services, event for which services are required etc.
                  </li>
                  <li>
                    <strong>Social-Media related Information:</strong> Information related to your social media profiles including but not limited to the username and content posted may be collected
                  </li>
                  <li>
                    <strong>Financial Information:</strong> Financial Information such as any third-party wallets, credit card information and history of transactions carried out on the Platform may be collected.
                  </li>
                  <li>
                    <strong>Other information:</strong> We may also collect information about the IP address and the browser you are using.
                  </li>
                </ol>

                <p className="mb-6 text-gray-300">
                  You agree and voluntarily consent to provide correct and accurate information. We shall not be liable for any inaccuracies in the information provided by You or any direct or indirect consequences of such inaccurate information. If we find out, either on our own or through any other means that You have provided false information, we shall be at liberty to restrict your access to the Platform/Website and our services.
                </p>

                {/* Section 2 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">How does the Company collect the Personal Information</h2>
                
                <ol className="list-decimal pl-6 mb-6 space-y-4 text-white">
                  <li>
                    <strong className="underline">Personal Information provided to the Company</strong>
                    <p className="mt-2 ml-6 text-white">
                      We may ask for Your Personal Information including but not limited to your full name, contact details and birth date at the time of Your registration on the Platform/Website. You willingly consent to provide the Company your Personal Information at the time of registration on the Platform/Website.
                    </p>
                  </li>
                  <li>
                    <strong className="underline">Personal Information collected automatically</strong>
                    <p className="mt-2 ml-6 text-white">
                      Some data such as your browser type, internet protocol address used, your usage patterns may be automatically collected by the Company using cookies. Cookies are tiny pieces of information which a website sends to Your computer. We use Cookies to provide you with a more personalized experience on the Platform/Website. You can change Your browser settings and choose to disable sharing of information through cookies. Sometimes, tracking pixels including but not limited to browser HTML pixels may be used to collect information about user behaviour on the Platform/Website. Pixels are tiny units which measure the digital images and graphics you see on a website. You agree that Cookies and Pixels are used to improve your experience as an end-user and consent to the use of the same.
                    </p>
                  </li>
                  <li>
                    <strong className="underline">Information we may receive from third parties:</strong>
                    <p className="mt-2 ml-6 text-white">
                      We may receive information about you from third parties. For example, if you access our websites or services through a third-party connection or log-in, for example, through your social media accounts, that third party may pass certain information about your use of its service to the Company. This information could include, but is not limited to, the user ID associated with your account (for example, your Twitter/Instagram User ID), an access token necessary to access that service, any information that you have permitted the third party to share with us, and any information you have made public in connection with that service. When you use our Platform/Website, third parties might give us some information about you, especially if you are signed into a third-party account while using our Platform/Website.
                    </p>
                  </li>
                </ol>

                {/* Section 3 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">What Purposes is the Personal Information Collected Used For?</h2>
                <p className="mb-4 text-white">The purposes for which the Company uses the data collected are:</p>

                <ul className="list-disc pl-6 mb-6 space-y-2 text-white">
                  <li>Verifying your identity: The contact details collected may be used to verify your identity. You agree that such verification is essential for the Company to run the Platform/Website smoothly and to comply with its legal and other obligations.</li>
                  <li>Personalizing your experience on the Platform/Website: The information collected from you would help the Company in personalizing your experience and providing you a better and more efficient service.</li>
                  <li>Improving the design and style of the Platform/Website.</li>
                  <li>Developing new products, features, services and functionality.</li>
                  <li>Communication regarding marketing and promotion of products/services.</li>
                  <li>To meet our government, legal and judicial obligations.</li>
                </ul>

                <p className="mb-6 text-white">
                  You agree that the aforementioned purposes are valid and give Your informed consent to the collection of Your Personal Information for such purposes.
                </p>

                <h3 className="text-xl font-bold text-white mt-8 mb-4 underline">How long will the Personal Information collected be retained by the Company?</h3>
                <p className="mb-6 text-white">
                  Subject to applicable laws, any information that is provided by you may be retained by the Company, at its sole discretion for as long as required for commercial purposes of the Company.
                </p>

                {/* Section 4 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Whom does the Company share Your Personal Information with?</h2>
                <p className="mb-4 text-white">The Company may share Your Personal Information, with:</p>

                <ol className="list-decimal pl-6 mb-6 space-y-2 text-white">
                  <li>
                    <strong>Third-party business partners:</strong> We may share your information with third-party business partners for the purpose of providing the Service to you. Those business partners will be given limited access to your information as is reasonably necessary to deliver the Service.
                  </li>
                  <li>
                    <strong>Employees/Consultants:</strong> The Company may share your information with its employees and consultants.
                  </li>
                  <li>
                    <strong>Compliance with law:</strong> The Company can share your information when compelled by a government agency, law, regulation, a court or other legal process.
                  </li>
                </ol>

                <p className="mb-6 text-white">
                  You willingly and based on informed consent, agree to the sharing of your Personal Information with the aforementioned. You agree that You shall not hold the Company liable if Your Personal Information is unauthorizedly disclosed or misused by the aforementioned.
                </p>

                <p className="mb-6 text-white">
                  We do not sell your information to any third-party.
                </p>

                {/* Section 5 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Rights of the User</h2>
                <p className="mb-4 text-white">You shall have the following rights under this Privacy Policy:</p>

                <ol className="list-decimal pl-6 mb-6 space-y-2 text-white">
                  <li>Right to Request access to Your Personal Information: You may, at any point of time, after You have consented to the collection of Your Personal Information, access the same through the Platform/Website.</li>
                  <li>Right to Request correction of Your Personal Information: You may, during anytime, after You have consented to the collection of Your Personal Information, request us to correct or update the same, by sending an email to <em className="text-gray-300">[insert email address]</em>. You shall be solely responsible for the failure to get Your Personal Information corrected or updated.</li>
                  <li>You may request us to practicably delete Your Personal Information by sending us an e-mail on <em className="text-gray-300">[Insert e-mail address]</em>.</li>
                  <li>You may request us to restrict the processing of Your Personal Information or raise objections related to the processing of Your Personal Information. In the event the restrictions requested impede us in providing the Services, we may have to restrict Your access to the Platform/Website and/or not provide you seamless Services.</li>
                  <li>You may request that we transfer the Personal Information that We have collected to some other organization or directly to You.</li>
                </ol>

                <p className="mb-6 text-white">
                  We shall practicably respond to Your requests within a minimum of 30 working days. In the event you choose to invoke any of the aforementioned rights, kindly inform us within a time period of 15 days after you provide the information to Us, failing which, We may not be able to entertain such requests.
                </p>

                {/* Section 6 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">How do we protect your information?</h2>
                <p className="mb-4 text-white">We protect Your information by employing the following measures:</p>

                <ol className="list-decimal pl-6 mb-6 space-y-2 text-white">
                  <li>We have put in place various physical and technical security measures to protect the Personal Information we collect from you.</li>
                  <li>We require those with whom we share Your Personal Information to enter into confidentiality arrangements with us so that they do not disclose Your personal information. We shall not be liable for any data loss, unauthorized disclosure or any direct or indirect damage arising out of in connection with the disclosure of data by third-parties.</li>
                  <li>By complying with all applicable laws and regulations.</li>
                </ol>

                <p className="mb-6 ml-6 text-white">
                  You acknowledge and agree, that the Company cannot possibly guarantee absolute protection against loss of information. As internet is susceptible to unforeseen security issues, we can only make reasonable efforts to protect Your Personal Information, but cannot give an absolute guarantee regarding the same. We shall not be liable in the event, Your Personal Information is unauthorizedly disclosed on account of improper use or disclosure, unauthorized modification and unlawful destruction or accidental loss of information, or any security breach which is beyond the reasonable control of the Company.
                </p>

                {/* Section 7 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4 underline">Third Party Websites</h2>
                <p className="mb-6 text-white">
                  Some content on the Platform/Website may contain links to third-party websites or Platform/Websites. If You choose to click on such links, You would be re-directed to a third-party website. Please note that, Our terms of use and privacy policy cease to apply as and when You are redirected to a third party website. You are advised to read the privacy policy of such third-party website before You submit any Personal Information on such a website. We shall not be responsible for any loss of information which may occur on such third-party websites. We are not liable to obtain your consent for third-party's privacy policy.
                </p>

                {/* Section 8 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Changes to Privacy Policy</h2>
                <p className="mb-6 text-white">
                  There may be changes to this Privacy Policy from time to time. The last effective date shall be highlighted at the top of policy information. You shall be solely liable to review the Privacy Policy for any changes. The Company is not obliged to intimate You regarding the changes.
                </p>

                {/* Section 9 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Force Majeure</h2>
                <p className="mb-4 text-white">
                  You agree that You shall not hold the Company responsible or liable for any non-performance of any obligations under this Privacy Policy, if such non-performance arises due to events including but not limited to:
                </p>

                <ol className="list-decimal pl-6 mb-6 space-y-2 text-white">
                  <li>Floods, fire earthquakes or any natural disaster or acts of god.</li>
                  <li>Riots, war or any such act of violence.</li>
                  <li>Epidemics/Pandemics</li>
                  <li>Unprecedented technical errors including but not limited to network errors, unforeseen down time of the internet and power outages affecting internet services.</li>
                  <li>Hacking</li>
                  <li>Global internet shutdowns.</li>
                  <li>Any change in applicable laws.</li>
                  <li>Any other reason beyond the Company's control.</li>
                </ol>

                {/* Section 10 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Limitation of Liability</h2>
                <p className="mb-6 text-white">
                  You further agree, that You shall not hold the Company liable for any unauthorised disclosure or leakage of your Personal Information, directly or indirectly, by the Company or any third-party. The Company shall not be liable for any indirect, consequential or remote damages arising out of or in connection with this privacy policy. The total liability of the Company in the event of breach of this privacy policy shall not exceed INR 1000.
                </p>

                {/* Section 11 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Governing Law and Jurisdiction</h2>
                <p className="mb-6 text-white">
                  All matters, claims and any other such issues which may directly or indirectly arise from or in connection with this Privacy Policy shall be governed under the laws of <em className="text-gray-300">[Insert jurisdiction where company is incorporated]</em>. The courts at Patna <em className="text-gray-300">[Insert place where company has incorporated or corporate office]</em> shall have the sole and exclusive jurisdiction to hear all matters, claims or any such issues which may directly or indirectly arise from or in connection with this Privacy Policy.
                </p>

                {/* Section 12 */}
                <h2 className="text-2xl font-bold text-white mt-12 mb-4">Redressal of Grievances</h2>
                <p className="mb-6 text-white">
                  If you have any questions or grievances regarding Our Platform/Website, the content thereof, our data handling policies, or about our Services, you can reach out to the Grievance officer of the Company customer support at <em className="text-gray-300">[Insert e-mail address]</em>.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 