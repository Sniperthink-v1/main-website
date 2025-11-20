"use client";

import Link from "next/link";
import Image from "next/image";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0F0F11] text-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Logo */}
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center">
            <Image
              src="/img/logo.svg"
              alt="SniperThink Logo"
              width={150}
              height={40}
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Terms Content */}
        <div className="prose prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>

          <p className="mb-6">
            These Terms of Use (the "Terms") constitute a legally binding
            agreement between you ("you," "your," or "User") and Grey Horizon
            Ventures Private Limited ("Company," "Sniperthink", "we," "us," or
            "our").
          </p>

          <p className="mb-6">
            By accessing or using our website/application (the "Site"/"App"),
            you agree to be bound by these Terms of Use and our Privacy Policy,
            which is published on this Site and is incorporated herein by
            reference. You further agree to comply with all applicable laws and
            regulations while using this Site.
          </p>

          <div className="bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-8">
            <p className="font-bold text-yellow-200">
              BY ACCESSING OR USING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE
              READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF USE. IF
              YOU DO NOT AGREE TO THESE TERMS, YOU ARE NOT AUTHORIZED TO ACCESS
              OR USE THE WEBSITE.
            </p>
          </div>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            1. SCOPE AND APPLICABILITY
          </h2>
          <p className="mb-6">
            These Terms of Use ("Terms"), together with our Privacy Policy,
            constitute the entire agreement between you ("User" or "You") and
            Grey Horizon Ventures Private Limited, trading as "Sniperthink"
            ("we," "us," "our," or "the Company"), regarding your access to and
            use of the website www.sniperthink.com ("Site").
          </p>
          <p className="mb-6">
            By accessing or using this Site, you acknowledge that you have read,
            understood, and agree to be bound by these Terms. If you do not
            agree, you must not use the Site.
          </p>
          <p className="mb-6">
            For any questions about these Terms or your use of the Site, please
            contact us at:{" "}
            <a
              href="mailto:hello@sniperthink.com"
              className="text-blue-400 hover:text-blue-300"
            >
              hello@sniperthink.com
            </a>
          </p>
          <p className="mb-4 font-semibold">
            You may use the Site if you meet the following criteria:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              You are at least 18 years of age or the age of majority in your
              jurisdiction.
            </li>
            <li>
              You agree to comply with these Terms, our Privacy Policy, and all
              applicable laws.
            </li>
            <li>
              You are not prohibited from using the Site under applicable law or
              any agreement with us.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            2. LICENSE TO USE THE SITE
          </h2>
          <p className="mb-6">
            Subject to your compliance with these Terms, the Company grants you
            a limited, worldwide, non-exclusive, non-transferable,
            non-sublicensable, revocable license to access and use the
            information, content, and services available on the Site solely for
            your lawful, personal, or internal business purposes.
          </p>
          <p className="mb-6">This license does not permit you to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Use any automated system or software to extract data from the
              Site;
            </li>
            <li>
              Resell, sublicense, or commercially exploit the Site or its
              contents;
            </li>
            <li>Modify, adapt, or create derivative works from the Site;</li>
            <li>Remove or obscure any proprietary notices on the Site.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">3. PROHIBITED USES</h2>
          <p className="mb-4">
            By accessing and using this Site, you agree that you will not:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-3">
            <li>
              <strong>Age Restriction:</strong> Use the Site if you are under 18
              years of age or below the age of majority in your jurisdiction.
            </li>
            <li>
              <strong>Unlawful Activities:</strong> Use any content or service
              in a manner that violates any applicable local, national, or
              international law or regulation.
            </li>
            <li>
              <strong>System Integrity:</strong> Use the Site in any manner that
              could harm, overburden, or impair our servers, networks, or
              systems.
            </li>
            <li>
              <strong>Third-Party Interference:</strong> Interfere with any
              other user's access to or enjoyment of the Site.
            </li>
            <li>
              <strong>Content Tampering:</strong> Modify, reverse-engineer,
              decompile, or otherwise alter any content or software available on
              the Site.
            </li>
            <li>
              <strong>Unauthorized Access:</strong> Attempt to gain unauthorized
              access to any part of the Site, other user accounts, or systems
              connected to the Site.
            </li>
            <li>
              <strong>Malicious Use:</strong> Introduce viruses, malware, or any
              malicious code intended to disrupt the Site's functionality.
            </li>
            <li>
              <strong>Data Harvesting:</strong> Use scrapers, bots, or automated
              tools to harvest or collect data from the Site without our prior
              written consent.
            </li>
          </ol>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            4. INTELLECTUAL PROPERTY
          </h2>
          <p className="mb-6">
            All content, features, design elements, trademarks, logos, software,
            graphics, text, images, and functionality available on the Site are
            the exclusive intellectual property of Grey Horizon Ventures Private
            Limited or its licensors. They are protected by copyright,
            trademark, trade secret, and other intellectual property laws.
          </p>
          <p className="mb-6">You agree not to:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Copy, reproduce, distribute, publicly display, or create
              derivative works from any content on the Site without our express
              written permission;
            </li>
            <li>
              Use any trademarks, service marks, or logos displayed on the Site
              without prior authorization;
            </li>
            <li>
              Use the Site's intellectual property for any commercial purpose or
              public display outside the scope of the license granted in Section
              2.
            </li>
          </ul>
          <p className="mb-6">
            Any unauthorized use of the Company's intellectual property may
            result in legal action and termination of your access to the Site.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            5. DATA PROTECTION AND PRIVACY
          </h2>
          <p className="mb-6">
            You acknowledge that you have read and fully understood our Privacy
            Policy, which governs how we collect, use, store, and protect your
            personal information.
          </p>
          <p className="mb-6">
            Your use of the Site is subject to the Privacy Policy, and by
            continuing to use the Site, you consent to the practices described
            therein. If you do not agree to the Privacy Policy, you must
            discontinue use of the Site immediately.
          </p>
          <p className="mb-6">
            We are committed to safeguarding your privacy in compliance with
            applicable data protection laws, including but not limited to the
            Information Technology Act, 2000 and related rules.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            6. USER-GENERATED CONTENT
          </h2>
          <p className="mb-6">
            Certain features of the Site may allow you to submit, post, or
            transmit content such as comments, feedback, suggestions, or other
            materials ("User Content").
          </p>
          <p className="mb-6">
            By submitting User Content, you grant the Company a perpetual,
            irrevocable, worldwide, royalty-free, non-exclusive license to use,
            reproduce, modify, adapt, publish, translate, distribute, and
            display such content in any media or format, whether now known or
            later developed.
          </p>
          <p className="mb-6">You represent and warrant that:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              You own or have the necessary rights to submit the User Content;
            </li>
            <li>Your User Content does not infringe any third-party rights;</li>
            <li>
              Your User Content is not unlawful, defamatory, obscene, or
              otherwise objectionable.
            </li>
          </ul>
          <p className="mb-6">
            We reserve the right (but are not obligated) to monitor, review, and
            remove any User Content that violates these Terms or is otherwise
            inappropriate.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            7. THIRD-PARTY LINKS AND SERVICES
          </h2>
          <p className="mb-6">
            The Site may contain links to third-party websites, services, or
            resources that are not owned or controlled by the Company. We
            provide these links solely for your convenience and do not endorse
            or assume responsibility for any third-party content or practices.
          </p>
          <p className="mb-6">You acknowledge and agree that:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              We are not responsible for the availability, accuracy, or content
              of third-party sites;
            </li>
            <li>
              Your use of third-party sites is at your own risk and subject to
              their terms and policies;
            </li>
            <li>
              We are not liable for any loss or damage arising from your
              interaction with third-party services.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            8. DISCLAIMERS AND WARRANTIES
          </h2>
          <p className="mb-4 font-semibold">
            The Site and all content, services, and information are provided "AS
            IS" and "AS AVAILABLE" without warranties of any kind, either
            express or implied.
          </p>
          <p className="mb-6">
            To the maximum extent permitted by applicable law, the Company
            disclaims all warranties, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Merchantability:</strong> That the Site or its content is
              suitable for a particular purpose;
            </li>
            <li>
              <strong>Accuracy:</strong> That the information on the Site is
              accurate, complete, reliable, or current;
            </li>
            <li>
              <strong>Non-Infringement:</strong> That use of the Site will not
              infringe any third-party intellectual property rights;
            </li>
            <li>
              <strong>Uninterrupted Access:</strong> That the Site will be
              available at all times or free from errors, viruses, or other
              harmful components.
            </li>
          </ul>
          <p className="mb-6">
            You acknowledge that your use of the Site is at your sole risk, and
            you assume full responsibility for any consequences arising from
            such use.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            9. LIMITATION OF LIABILITY
          </h2>
          <div className="bg-red-900/20 border-l-4 border-red-400 p-4 mb-6">
            <p className="text-red-200 font-semibold mb-3">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
            </p>
            <p className="text-red-200 mb-3">
              IN NO EVENT SHALL GREY HORIZON VENTURES PRIVATE LIMITED, ITS
              DIRECTORS, OFFICERS, EMPLOYEES, AFFILIATES, AGENTS, OR LICENSORS
              BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
              CONSEQUENTIAL, OR PUNITIVE DAMAGES (INCLUDING BUT NOT LIMITED TO
              LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES)
              ARISING OUT OF OR IN CONNECTION WITH:
            </p>
            <ul className="list-disc pl-6 text-red-200 space-y-2">
              <li>
                Your access to or use of (or inability to access or use) the
                Site;
              </li>
              <li>Any conduct or content of any third party on the Site;</li>
              <li>Any content obtained from the Site;</li>
              <li>
                Unauthorized access, use, or alteration of your transmissions or
                content, whether based on warranty, contract, tort (including
                negligence), or any other legal theory, even if the Company has
                been advised of the possibility of such damages.
              </li>
            </ul>
          </div>
          <p className="mb-6 font-semibold">
            OUR TOTAL CUMULATIVE LIABILITY TO YOU FOR ALL CLAIMS ARISING OUT OF
            OR RELATING TO THESE TERMS OR YOUR USE OF THE SITE SHALL NOT EXCEED
            INR 1,000 (ONE THOUSAND RUPEES).
          </p>
          <p className="mb-6">
            Some jurisdictions do not allow the exclusion or limitation of
            certain warranties or liabilities. In such jurisdictions, the above
            limitations may not apply to you, and our liability will be limited
            to the greatest extent permitted by law.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">10. INDEMNIFICATION</h2>
          <p className="mb-6">
            You agree to indemnify, defend, and hold harmless Grey Horizon
            Ventures Private Limited, its affiliates, directors, officers,
            employees, agents, and licensors from and against any and all
            claims, liabilities, damages, losses, costs, expenses, or fees
            (including reasonable attorneys' fees) arising out of or relating
            to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Your use or misuse of the Site;</li>
            <li>Your violation of these Terms;</li>
            <li>
              Your infringement of any third-party rights, including
              intellectual property rights;
            </li>
            <li>Any User Content you submit or transmit through the Site.</li>
          </ul>
          <p className="mb-6">
            The Company reserves the right to assume the exclusive defense and
            control of any matter subject to indemnification by you, and you
            agree to cooperate fully with such defense.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            11. TERMINATION AND SUSPENSION
          </h2>
          <p className="mb-6">
            We reserve the right, in our sole discretion, to:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              Suspend or terminate your access to the Site, with or without
              notice, for any reason, including but not limited to:
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>Violation of these Terms;</li>
                <li>Fraudulent, harmful, or unlawful conduct;</li>
                <li>Prolonged inactivity;</li>
                <li>Technical or security reasons.</li>
              </ul>
            </li>
            <li>
              Modify, suspend, or discontinue any part of the Site at any time.
            </li>
          </ul>
          <p className="mb-6">Upon termination:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Your license to use the Site immediately ceases;</li>
            <li>
              All provisions of these Terms that by their nature should survive
              termination (including but not limited to ownership provisions,
              disclaimers, indemnities, and limitations of liability) shall
              survive.
            </li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            12. MODIFICATIONS TO TERMS
          </h2>
          <p className="mb-6">
            We reserve the right to modify or update these Terms at any time, in
            our sole discretion. Any changes will be effective immediately upon
            posting the revised Terms on the Site.
          </p>
          <p className="mb-6">
            Your continued use of the Site after the posting of revised Terms
            constitutes your acceptance of those changes. It is your
            responsibility to review these Terms periodically to stay informed
            of any updates.
          </p>
          <p className="mb-6">
            If you do not agree to the modified Terms, you must stop using the
            Site immediately.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            13. GOVERNING LAW AND JURISDICTION
          </h2>
          <p className="mb-6">
            These Terms of Use shall be governed by, construed, and enforced in
            accordance with the laws of India, without regard to its conflict of
            law principles.
          </p>
          <p className="mb-6">
            Any disputes, claims, or controversies arising out of or relating to
            these Terms or your use of the Site shall be subject to the
            exclusive jurisdiction of the courts located in Noida, Uttar
            Pradesh, India. You hereby consent to the personal jurisdiction and
            venue of such courts.
          </p>
          <p className="mb-6">
            If any provision of these Terms is found to be invalid or
            unenforceable by a court of competent jurisdiction, the remaining
            provisions shall continue in full force and effect.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            14. SEVERABILITY AND WAIVER
          </h2>
          <p className="mb-6">
            <strong>Severability:</strong> If any provision of these Terms is
            held to be invalid, illegal, or unenforceable, the validity,
            legality, and enforceability of the remaining provisions shall not
            be affected or impaired in any way.
          </p>
          <p className="mb-6">
            <strong>Waiver:</strong> No waiver of any term or condition of these
            Terms shall be deemed a further or continuing waiver of such term or
            any other term. Our failure to assert any right or provision under
            these Terms shall not constitute a waiver of such right or
            provision.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            15. USE OF GOOGLE USER DATA (GOOGLE OAUTH)
          </h2>
          <p className="mb-6">
            Our Site may use Google OAuth to access certain Google services on
            your behalf, including but not limited to Google Calendar. This
            section explains how we use the data accessed via Google OAuth and
            your rights regarding such data.
          </p>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            15.1. Permissions Requested
          </h3>
          <p className="mb-4">
            When you authorize our Site to access your Google account, we may
            request the following permissions:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Google Calendar (Read and Write Access):</strong> To view,
              create, update, and delete calendar events on your behalf.
            </li>
            <li>
              <strong>Profile Information:</strong> To access your basic profile
              information (name, email address, profile picture) to personalize
              your experience.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            15.2. How We Use Google User Data
          </h3>
          <p className="mb-4">
            We use the data accessed via Google OAuth solely for the following
            purposes:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Calendar Management:</strong> To enable you to schedule,
              view, modify, or delete appointments, meetings, and events
              directly through our Site.
            </li>
            <li>
              <strong>Service Integration:</strong> To synchronize calendar data
              with our platform to provide seamless scheduling and notification
              services.
            </li>
            <li>
              <strong>User Identification:</strong> To authenticate your
              identity and provide a personalized user experience.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            15.3. Data Storage and Retention
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              We may temporarily store calendar event data in our servers solely
              to facilitate the requested service (e.g., displaying upcoming
              events or syncing your calendar).
            </li>
            <li>
              We do not permanently store your Google Calendar data unless
              explicitly required for the functionality of the service.
            </li>
            <li>
              Any stored data will be encrypted and secured using
              industry-standard practices.
            </li>
            <li>
              We retain Google user data only for as long as necessary to
              provide the requested service or as required by law.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            15.4. Data Sharing
          </h3>
          <p className="mb-4">
            We do not sell, rent, trade, or share your Google user data with
            third parties, except in the following limited circumstances:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Service Providers:</strong> We may share data with trusted
              third-party service providers (e.g., cloud hosting, analytics) who
              assist us in operating the Site, subject to strict confidentiality
              agreements.
            </li>
            <li>
              <strong>Legal Requirements:</strong> We may disclose data if
              required to comply with applicable laws, regulations, legal
              processes, or governmental requests.
            </li>
            <li>
              <strong>Protection of Rights:</strong> We may disclose data to
              protect the rights, property, or safety of the Company, our users,
              or others.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            15.5. User Control and Revocation
          </h3>
          <p className="mb-4">
            You have full control over the permissions granted to our Site via
            Google OAuth:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              <strong>Revoke Access:</strong> You may revoke our access to your
              Google account at any time by visiting your{" "}
              <a
                href="https://myaccount.google.com/permissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline"
              >
                Google Account Permissions page
              </a>
              .
            </li>
            <li>
              <strong>Delete Data:</strong> Upon revocation, we will delete any
              stored Google user data associated with your account within a
              reasonable time frame, unless retention is required by law.
            </li>
            <li>
              <strong>Request Data Deletion:</strong> You may also contact us at{" "}
              <a
                href="mailto:hello@sniperthink.com"
                className="text-blue-400 hover:text-blue-300"
              >
                hello@sniperthink.com
              </a>{" "}
              to request deletion of your Google user data.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            15.6. Compliance with Google API Services User Data Policy
          </h3>
          <p className="mb-6">
            Our use of Google user data complies with the{" "}
            <a
              href="https://developers.google.com/terms/api-services-user-data-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline"
            >
              Google API Services User Data Policy
            </a>
            , including the Limited Use requirements. Specifically:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>
              We only use Google user data to provide or improve user-facing
              features that are prominent in our Site's user interface.
            </li>
            <li>
              We do not transfer Google user data to third parties except as
              necessary to provide or improve user-facing features, comply with
              applicable law, or as part of a merger or acquisition (with user
              notice).
            </li>
            <li>
              We do not use Google user data for serving advertisements,
              including retargeting, personalized or interest-based advertising.
            </li>
            <li>
              We do not allow humans to read Google user data unless:
              <ul className="list-circle pl-6 mt-2 space-y-1">
                <li>We have obtained your affirmative agreement;</li>
                <li>
                  It is necessary for security purposes (e.g., investigating
                  abuse);
                </li>
                <li>It is required to comply with applicable law; or</li>
                <li>
                  The data has been aggregated and anonymized for internal
                  operations in compliance with applicable privacy laws.
                </li>
              </ul>
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            15.7. Security Measures
          </h3>
          <p className="mb-6">
            We implement appropriate technical and organizational measures to
            protect your Google user data against unauthorized access,
            disclosure, alteration, or destruction. These measures include:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Encryption of data in transit and at rest;</li>
            <li>Regular security audits and vulnerability assessments;</li>
            <li>
              Access controls limiting data access to authorized personnel only;
            </li>
            <li>
              Compliance with industry best practices and applicable data
              protection laws.
            </li>
          </ul>

          <h3 className="text-xl font-semibold mt-8 mb-3">
            15.8. Changes to Google Data Usage
          </h3>
          <p className="mb-6">
            If we make any material changes to how we use Google user data, we
            will notify you by updating these Terms and, where required,
            obtaining your renewed consent.
          </p>

          <h2 className="text-2xl font-bold mt-12 mb-4">
            16. QUESTIONS AND GRIEVANCES
          </h2>
          <p className="mb-4">
            If you have any questions, concerns, or grievances regarding these
            Terms of Use, our use of Google user data, or any other matter
            related to the Site, please contact us:
          </p>
          <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-6 mb-8">
            <p className="mb-2">
              <strong>Company Name:</strong> Grey Horizon Ventures Private
              Limited (trading as Sniperthink)
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:hello@sniperthink.com"
                className="text-blue-400 hover:text-blue-300"
              >
                hello@sniperthink.com
              </a>
            </p>
            <p className="mb-2">
              <strong>Website:</strong>{" "}
              <a
                href="https://www.sniperthink.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300"
              >
                www.sniperthink.com
              </a>
            </p>
          </div>
          <p className="mb-6">
            We will make reasonable efforts to address your inquiry or concern
            in a timely manner.
          </p>

          <p className="mt-8 text-sm text-gray-400">
            <strong>Last Updated:</strong> 20 January 2025
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-white/80 hover:text-white">
              Back to Home
            </Link>
            <Link href="/privacy" className="text-white/80 hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
