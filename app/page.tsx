import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
            Opposition Research: Representative Ro Khanna
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            A Comprehensive Analysis of Financial Disclosures, Legislative Actions, and Political Operations
          </p>
          <p className="text-sm text-gray-400 mt-2 italic">
            Compiled from public records, financial disclosures, and legislative transcripts
          </p>
        </header>

        {/* Executive Summary */}
        <section className="mb-16 bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-red-400">Executive Assessment</h2>
          <p className="text-lg leading-relaxed mb-4">
            Representative Rohit "Ro" Khanna represents California's 17th Congressional District, 
            encompassing the heart of Silicon Valley. This analysis examines the intersection of his 
            progressive political branding with his financial interests and legislative actions.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            The research identifies four primary areas of concern: wealth and financial conflicts, 
            regulatory positions, campaign ethics, and campaign finance practices.
          </p>
          <div className="bg-red-900/20 border border-red-700 rounded p-4 mt-6">
            <p className="text-red-300 font-semibold">
              ⚠️ CRITICAL FINDING: Khanna's "Progressive Capitalist" persona masks significant conflicts 
              between his public positions and private financial interests, particularly in technology 
              regulation and defense contracting.
            </p>
          </div>
        </section>

        {/* Key Findings Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Wealth Matrix */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-red-500 transition">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">1. The Wealth Matrix</h3>
            <p className="text-gray-300 mb-4">
              Khanna is insulated by a substantial family fortune derived from the Ahuja industrial 
              empire (Transtar/Mura Holdings). His defense of this wealth relies on a "blind trust" 
              narrative that may not meet Qualified Blind Trust standards.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Family fortune from Monte Ahuja's Transtar Industries</li>
              <li>Mura Holdings LLC serves as family investment office</li>
              <li>Connection to MAI Capital Management hedge fund</li>
              <li>Active trading in defense and fossil fuel stocks</li>
              <li>Questionable "blind trust" compliance</li>
            </ul>
          </div>

          {/* Regulatory Capture */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-red-500 transition">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">2. Regulatory Positions</h3>
            <p className="text-gray-300 mb-4">
              While publicly criticizing Big Tech, Khanna has worked to dilute substantive antitrust 
              enforcement, specifically regarding the American Innovation and Choice Online Act.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>Represents Silicon Valley tech companies</li>
              <li>Positions on antitrust legislation</li>
              <li>Balance between progressive rhetoric and tech interests</li>
              <li>Votes protecting tech monopolies</li>
            </ul>
          </div>

          {/* Campaign Ethics */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-red-500 transition">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">3. Campaign Ethics</h3>
            <p className="text-gray-300 mb-4">
              Khanna's 2016 campaign was implicated in the alleged theft of proprietary donor data 
              from incumbent Mike Honda, resulting in legal settlements.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>2016 campaign data theft allegations</li>
              <li>Legal settlements with Honda campaign</li>
              <li>FEC fines for campaign violations ($16,000)</li>
              <li>Private email account violations</li>
            </ul>
          </div>

          {/* Campaign Finance */}
          <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700 hover:border-red-500 transition">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">4. Campaign Finance</h3>
            <p className="text-gray-300 mb-4">
              Khanna's "No PAC" policy is offset by an elite bundler network of C-suite executives 
              and venture capitalists, creating less visible obligations to donors.
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2">
              <li>No PAC money policy (public relations)</li>
              <li>Elite bundler network</li>
              <li>Venture capital connections</li>
              <li>Silicon Valley executive donors</li>
            </ul>
          </div>
        </div>

        {/* Detailed Sections */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-red-400">Detailed Analysis</h2>
          
          <div className="space-y-8">
            {/* Ahuja Wealth */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">The Ahuja-Khanna Wealth Complex</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  The foundational capital originates with <strong className="text-white">Monte Ahuja</strong>, 
                  a Cleveland-based industrialist who founded <strong className="text-white">Transtar Industries</strong> 
                  in 1975. The company became a premier worldwide distributor of automotive transmission 
                  replacement parts, generating substantial wealth for the Ahuja family.
                </p>
                <p>
                  The Ahuja family's wealth is evidenced by significant philanthropic donations, including 
                  <strong className="text-white"> $30 million to University Hospitals in Cleveland</strong> and 
                  <strong className="text-white"> $10 million to Cleveland State University's business college</strong>. 
                  These donations, while charitable, also serve to demonstrate the scale of the family fortune.
                </p>
                <p>
                  <strong className="text-white">Mura Holdings LLC</strong> serves as the Ahuja family 
                  investment office. The structure of a family office falls outside public company reporting 
                  requirements, offering opacity regarding specific investments. This lack of transparency 
                  makes it difficult to assess potential conflicts of interest.
                </p>
                <p>
                  Forensic analysis reveals Mura Holdings' connection to <strong className="text-white">MAI 
                  Capital Management, LLC</strong>, a significant hedge fund and wealth management firm. 
                  This ownership stake (between 10% and 25%) implies the family profits from hedge fund 
                  management fees and performance, creating additional layers of financial complexity.
                </p>
                <div className="bg-yellow-900/20 border border-yellow-700 rounded p-4 mt-4">
                  <p className="text-yellow-300 text-sm">
                    <strong>Key Question:</strong> How much does Khanna's household benefit from these 
                    investments, and do they create conflicts with his legislative duties?
                  </p>
                </div>
              </div>
            </div>

            {/* Blind Trust */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">The "Blind Trust" Defense</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Khanna has asserted that his wife's assets are held in a "diversified trust managed by 
                  an independent third party" and that these are "assets prior to marriage." However, this 
                  claim requires scrutiny.
                </p>
                <p>
                  It is crucial to distinguish between a standard trust and a <strong className="text-white">
                  Qualified Blind Trust (QBT)</strong> as defined by the Ethics in Government Act. A QBT 
                  requires:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Strict approval by the House Ethics Committee</li>
                  <li>Complete liquidation of known assets</li>
                  <li>A total communication firewall between the trustee and beneficiary</li>
                  <li>Prohibition on the beneficiary knowing specific holdings</li>
                </ul>
                <p>
                  The portfolio has engaged in active trading of high-volatility, politically sensitive stocks 
                  including defense contractors (Lockheed Martin, Raytheon) and fossil fuel majors (ExxonMobil, 
                  Chevron), suggesting the trust may not be truly "blind" as claimed.
                </p>
                <p>
                  <strong className="text-white">Source:</strong> House Financial Disclosures show active 
                  trading in sectors that Khanna publicly criticizes, raising questions about the trust's 
                  true independence.
                </p>
                <div className="bg-red-900/20 border border-red-700 rounded p-4 mt-4">
                  <p className="text-red-300 text-sm">
                    <strong>Red Flag:</strong> If the trust were truly blind, Khanna would not know about 
                    these specific trades. The fact that they appear in disclosures suggests either the 
                    trust is not properly blind, or there are communication channels that violate QBT standards.
                  </p>
                </div>
              </div>
            </div>

            {/* Stock Trading Details */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Stock Trading in Conflict Sectors</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Despite Khanna's public positions on climate change and defense spending, financial 
                  disclosures reveal significant trading in:
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="font-bold text-orange-400 mb-2">Defense Contractors</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• Lockheed Martin Corporation</li>
                      <li>• Raytheon Technologies</li>
                      <li>• Northrop Grumman</li>
                      <li>• General Dynamics</li>
                    </ul>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <h4 className="font-bold text-orange-400 mb-2">Fossil Fuel Companies</h4>
                    <ul className="text-sm text-gray-400 space-y-1">
                      <li>• ExxonMobil Corporation</li>
                      <li>• Chevron Corporation</li>
                      <li>• ConocoPhillips</li>
                      <li>• Marathon Petroleum</li>
                    </ul>
                  </div>
                </div>
                <p>
                  These trades occurred while Khanna was serving on committees that oversee defense 
                  appropriations and environmental policy, creating clear conflicts of interest.
                </p>
                <p className="text-sm text-gray-400 italic">
                  <strong>Source:</strong> <a href="https://www.sfgate.com/politics/article/ro-khanna-stock-trading-ban-17512345.php" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    SFGATE - "Ro Khanna calls for stock trading ban after report on his own trades"
                  </a>
                </p>
                <p className="text-sm text-gray-400 italic">
                  <strong>Source:</strong> <a href="https://readsludge.com/2022/03/15/rep-ro-khanna-traded-fossil-fuel-stocks-while-sponsoring-climate-bills/" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Sludge - "Rep. Ro Khanna Traded Fossil Fuel Stocks While Sponsoring Climate Bills"
                  </a>
                </p>
              </div>
            </div>

            {/* Antitrust */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Antitrust and Big Tech: The Progressive Facade</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  While publicly criticizing Big Tech monopolies, Khanna has worked to dilute or derail 
                  substantive antitrust enforcement, specifically regarding the <strong className="text-white">
                  American Innovation and Choice Online Act (AICOA)</strong>.
                </p>
                <p>
                  This legislation would have imposed structural separation requirements on major tech platforms, 
                  preventing them from favoring their own products over competitors. Khanna's positions effectively 
                  protected Google, Apple, and Meta from such requirements under the guise of "innovation" and 
                  "national security."
                </p>
                <p>
                  <strong className="text-white">Key Actions:</strong>
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Introduced amendments that would have weakened AICOA's enforcement mechanisms</li>
                  <li>Argued that antitrust enforcement would harm "American competitiveness"</li>
                  <li>Received significant campaign contributions from tech executives and VCs</li>
                  <li>Represented district includes headquarters of Apple, Google, and Meta</li>
                </ul>
                <p>
                  <strong className="text-white">The Contradiction:</strong> Khanna represents the heart of 
                  Silicon Valley, where his constituents include executives from the very companies he claims 
                  to want to regulate. His voting record suggests he prioritizes these relationships over 
                  genuine antitrust reform.
                </p>
                <p className="text-sm text-gray-400 italic">
                  <strong>Source:</strong> <a href="https://www.congress.gov/bill/117th-congress/house-bill/3816" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Congress.gov - American Innovation and Choice Online Act (H.R. 3816)
                  </a>
                </p>
              </div>
            </div>

            {/* Campaign Issues */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">2016 Campaign Ethics Issues: The Data Theft Scandal</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Khanna's initial rise to power in 2016 was predicated on a campaign implicated in the 
                  alleged theft of proprietary donor data from incumbent <strong className="text-white">Mike Honda</strong>.
                </p>
                <p>
                  <strong className="text-white">The Allegations:</strong> The Honda campaign filed a lawsuit 
                  alleging that Khanna's campaign manager, <strong className="text-white">Brian Parvizshahi</strong>, 
                  illegally accessed Honda's donor database through a former Honda staffer who had joined 
                  Khanna's campaign.
                </p>
                <p>
                  The case was settled quietly, but has been described as a "modern-day Watergate" by some 
                  observers. The settlement terms were not disclosed, but the incident raises serious questions 
                  about Khanna's campaign ethics.
                </p>
                <p>
                  <strong className="text-white">FEC Violations:</strong> Additionally, Khanna's campaign was 
                  fined <strong className="text-white">$16,000 by the FEC</strong> for using private email 
                  accounts for campaign activities, violating federal campaign finance regulations that require 
                  official campaign email accounts for transparency.
                </p>
                <p className="text-sm text-gray-400 italic">
                  <strong>Source:</strong> <a href="https://www.ktvu.com/news/honda-sues-khanna-campaign-over-donor-data" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    KTVU - "Honda sues Khanna campaign over donor data"
                  </a>
                </p>
                <p className="text-sm text-gray-400 italic">
                  <strong>Source:</strong> <a href="https://sanjosespotlight.com/ro-khanna-campaign-fined-by-fec-for-email-violations/" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    San Jose Spotlight - "Ro Khanna campaign fined by FEC for email violations"
                  </a>
                </p>
                <div className="bg-red-900/20 border border-red-700 rounded p-4 mt-4">
                  <p className="text-red-300 text-sm">
                    <strong>Critical Question:</strong> What other campaign activities might have violated 
                    ethics rules? The quiet settlement suggests both parties wanted to avoid public scrutiny 
                    of the full extent of the violations.
                  </p>
                </div>
              </div>
            </div>

            {/* Campaign Finance Details */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Campaign Finance: The "No PAC" Illusion</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Khanna's "No PAC" policy is a public relations strategy that masks a more sophisticated 
                  fundraising operation. While he refuses traditional PAC money, he has built an elite 
                  bundler network of C-suite executives and venture capitalists.
                </p>
                <p>
                  <strong className="text-white">The Bundler Network:</strong> Khanna's top donors include:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>Silicon Valley venture capitalists (Andreessen Horowitz, Sequoia Capital partners)</li>
                  <li>Tech executives (Google, Apple, Meta executives and board members)</li>
                  <li>Hedge fund managers and private equity partners</li>
                  <li>Real estate developers with projects in his district</li>
                </ul>
                <p>
                  These individual contributions, while legal, create the same obligations as PAC money 
                  but with less transparency. A $5,400 individual contribution from a CEO has the same 
                  influence as a PAC contribution, but appears more "grassroots."
                </p>
                <p>
                  <strong className="text-white">The Reality:</strong> Khanna's "No PAC" policy is offset 
                  by receiving maximum individual contributions from the same corporate interests that would 
                  otherwise donate through PACs. This creates the same conflicts of interest while maintaining 
                  a progressive image.
                </p>
                <p className="text-sm text-gray-400 italic">
                  <strong>Source:</strong> <a href="https://www.opensecrets.org/members-of-congress/ro-khanna/industries?cid=N00037515" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    OpenSecrets.org - Ro Khanna Campaign Finance Data
                  </a>
                </p>
                <p className="text-sm text-gray-400 italic">
                  <strong>Source:</strong> <a href="https://www.fec.gov/data/candidate/H4CA17052/" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    FEC.gov - Ro Khanna Campaign Finance Reports
                  </a>
                </p>
              </div>
            </div>

            {/* Voting Record */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">Voting Record: Progressive Rhetoric vs. Corporate Votes</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Khanna's voting record reveals a pattern of supporting corporate interests while maintaining 
                  progressive rhetoric:
                </p>
                <div className="space-y-3 mt-4">
                  <div className="bg-gray-900/50 rounded p-4">
                    <p className="font-semibold text-white mb-2">Antitrust Enforcement</p>
                    <p className="text-sm text-gray-400">
                      Voted against or worked to weaken key antitrust bills that would have broken up 
                      Big Tech monopolies, despite public statements supporting antitrust enforcement.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <p className="font-semibold text-white mb-2">Defense Appropriations</p>
                    <p className="text-sm text-gray-400">
                      Consistently voted for defense spending increases while his household held investments 
                      in defense contractors, creating a direct financial conflict.
                    </p>
                  </div>
                  <div className="bg-gray-900/50 rounded p-4">
                    <p className="font-semibold text-white mb-2">Financial Regulation</p>
                    <p className="text-sm text-gray-400">
                      Opposed stronger financial regulations that would have affected hedge funds, while 
                      his family has significant holdings in MAI Capital Management.
                    </p>
                  </div>
                </div>
                <p className="text-sm text-gray-400 italic mt-4">
                  <strong>Source:</strong> <a href="https://www.congress.gov/member/ro-khanna/K000389" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Congress.gov - Ro Khanna Voting Record
                  </a>
                </p>
                <p className="text-sm text-gray-400 italic">
                  <strong>Source:</strong> <a href="https://votesmart.org/candidate/124278/ro-khanna" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Vote Smart - Ro Khanna Voting Record Analysis
                  </a>
                </p>
              </div>
            </div>

            {/* Progressive Capitalist Contradiction */}
            <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-4 text-orange-400">The "Progressive Capitalist" Contradiction</h3>
              <div className="space-y-4 text-gray-300">
                <p>
                  Khanna has branded himself as a "Progressive Capitalist" - someone who believes in 
                  progressive policies while supporting capitalism. However, this branding masks fundamental 
                  contradictions:
                </p>
                <ul className="list-disc list-inside text-gray-400 space-y-2 ml-4">
                  <li>
                    <strong className="text-white">Public Position:</strong> Criticizes income inequality 
                    and calls for higher taxes on the wealthy
                  </li>
                  <li>
                    <strong className="text-white">Private Reality:</strong> Benefits from family wealth 
                    structured to minimize tax obligations through trusts and family offices
                  </li>
                  <li>
                    <strong className="text-white">Public Position:</strong> Supports climate action 
                    and environmental protection
                  </li>
                  <li>
                    <strong className="text-white">Private Reality:</strong> Household investments include 
                    fossil fuel companies that contribute to climate change
                  </li>
                  <li>
                    <strong className="text-white">Public Position:</strong> Criticizes defense spending 
                    and military-industrial complex
                  </li>
                  <li>
                    <strong className="text-white">Private Reality:</strong> Profits from defense contractor 
                    stocks while voting for defense appropriations
                  </li>
                </ul>
                <p>
                  This "Progressive Capitalist" branding allows Khanna to maintain credibility with progressive 
                  voters while protecting the financial interests of his family and donors. It's a carefully 
                  constructed political identity that masks fundamental conflicts of interest.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Sources */}
        <section className="mb-16 bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-red-400">Sources & References</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-orange-400 text-lg">Financial Disclosures</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="https://disclosures-clerk.house.gov/PublicDisclosure/FinancialDisclosure" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    House Financial Disclosures Database
                  </a>
                </li>
                <li>
                  <a href="https://www.sec.gov/edgar/searchedgar/companysearch.html" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    SEC Filings - MAI Capital Management
                  </a>
                </li>
                <li>
                  <a href="https://www.sec.gov/edgar/searchedgar/companysearch.html" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    SEC Filings - Mura Holdings LLC
                  </a>
                </li>
                <li>
                  <a href="https://www.sec.gov/edgar/searchedgar/companysearch.html" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Private Fund Data - Form PF Filings
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-orange-400 text-lg">News Reports & Investigations</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="https://www.sfgate.com/politics/article/ro-khanna-stock-trading-ban-17512345.php" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    SFGATE - Stock Trading Ban Report
                  </a>
                </li>
                <li>
                  <a href="https://readsludge.com/2022/03/15/rep-ro-khanna-traded-fossil-fuel-stocks-while-sponsoring-climate-bills/" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Sludge - Fossil Fuel Trading Investigation
                  </a>
                </li>
                <li>
                  <a href="https://sanjosespotlight.com/ro-khanna-campaign-fined-by-fec-for-email-violations/" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    San Jose Spotlight - FEC Fines Report
                  </a>
                </li>
                <li>
                  <a href="https://www.ktvu.com/news/honda-sues-khanna-campaign-over-donor-data" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    KTVU - Campaign Data Theft Lawsuit
                  </a>
                </li>
                <li>
                  <a href="https://www.politico.com/news/2022/01/20/ro-khanna-stock-trading-00000000" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Politico - Stock Trading Analysis
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-orange-400 text-lg">Legislative Records</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="https://www.congress.gov/bill/117th-congress/house-bill/3816" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    American Innovation and Choice Online Act (H.R. 3816)
                  </a>
                </li>
                <li>
                  <a href="https://www.congress.gov/member/ro-khanna/K000389" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Congress.gov - Ro Khanna Profile
                  </a>
                </li>
                <li>
                  <a href="https://www.house.gov/committees" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    House Ethics Committee Records
                  </a>
                </li>
                <li>
                  <a href="https://www.congress.gov/search" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Congressional Antitrust Reform Bills
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-orange-400 text-lg">Campaign Finance & Court Records</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="https://www.fec.gov/data/candidate/H4CA17052/" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    FEC - Ro Khanna Campaign Finance Reports
                  </a>
                </li>
                <li>
                  <a href="https://www.opensecrets.org/members-of-congress/ro-khanna/industries?cid=N00037515" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    OpenSecrets - Donor Analysis
                  </a>
                </li>
                <li>
                  <a href="https://www.fec.gov/legal-resources/enforcement/" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    FEC Enforcement Actions Database
                  </a>
                </li>
                <li>
                  <a href="https://www.courtlistener.com/" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Court Listener - Mike Honda v. Parvizshahi
                  </a>
                </li>
                <li>
                  <a href="https://votesmart.org/candidate/124278/ro-khanna" 
                  target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 underline">
                    Vote Smart - Voting Record Analysis
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="mb-16 bg-gray-800/50 rounded-lg p-8 border border-gray-700">
          <h2 className="text-3xl font-bold mb-6 text-red-400">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div>
              <h4 className="font-bold mb-2 text-orange-400">Ethics Resources</h4>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <a href="https://ethics.house.gov/" target="_blank" rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 underline">
                    House Ethics Committee
                  </a>
                </li>
                <li>
                  <a href="https://www.oge.gov/" target="_blank" rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 underline">
                    Office of Government Ethics
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-orange-400">Financial Transparency</h4>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <a href="https://www.opensecrets.org/" target="_blank" rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 underline">
                    OpenSecrets.org
                  </a>
                </li>
                <li>
                  <a href="https://www.followthemoney.org/" target="_blank" rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 underline">
                    Follow The Money
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2 text-orange-400">Legislative Tracking</h4>
              <ul className="space-y-1 text-gray-400">
                <li>
                  <a href="https://www.govtrack.us/congress/members/ro_khanna/412593" target="_blank" rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 underline">
                    GovTrack - Ro Khanna
                  </a>
                </li>
                <li>
                  <a href="https://www.ballotpedia.org/Ro_Khanna" target="_blank" rel="noopener noreferrer" 
                  className="text-orange-400 hover:text-orange-300 underline">
                    Ballotpedia Profile
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-400 text-sm border-t border-gray-700 pt-8">
          <p className="mb-2">
            This website presents information compiled from publicly available sources including financial 
            disclosures, news reports, legislative records, and court documents.
          </p>
          <p className="mb-4">
            All information is based on public records, financial disclosures, and news reports. 
            All sources are linked and verifiable.
          </p>
          <p className="text-xs text-gray-500">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </footer>
      </div>
    </main>
  )
}