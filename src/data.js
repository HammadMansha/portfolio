export const profile = {
  name: 'Hammad Ul Hassan',
  first: 'Hammad',
  last: 'Ul Hassan',
  title: 'Senior Flutter Developer',
  location: 'Lahore, Pakistan',
  email: 'hammadmansha136@gmail.com',
  phone: '+923234442431',
  phoneLabel: '+92 323 4442431',
  summary:
    'I design and ship visually compelling, high-performance Flutter apps — the kind people actually enjoy using. Four years in, I still care about the same things: clean architecture, thoughtful UI, and code that stays maintainable after launch.',
  github: 'https://github.com/HammadMansha',
  linkedin: 'https://www.linkedin.com/in/hammad-ul-hassan-a6a682207',
  upwork: 'https://www.upwork.com/freelancers/~01b582432427228cea',
}

export const stats = [
  { value: '4+', label: 'Years shipping apps' },
  { value: '12+', label: 'Production products' },
  { value: '2', label: 'App stores live on' },
]

export const projects = [
  {
    title: 'Global 365 Accounting',
    role: 'Fintech · Technupur',
    year: '2024 — Present',
    blurb:
      'Cloud financial platform covering banks, invoices, vendors, reconciliation, and live reporting — with reusable UI, Excel export, and email-ready statements.',
    tags: ['Flutter', 'Fintech', 'Reporting', 'RBAC'],
    image: '/apps/global365.jpg',
    imageKind: 'wide',
    links: [
      { label: 'Website', href: 'https://global365.com/' },
      { label: 'Accounting', href: 'https://global365.com/accounting' },
    ],
    accent: 'gold',
  },
  {
    title: 'Global 365 Payroll',
    role: 'Payroll · Technupur',
    year: '2024 — Present',
    blurb:
      'Full payroll suite for employees and contractors: pay runs, tax hub, W-2 / 1099, overtime rules, direct deposit, and tight sync back into accounting.',
    tags: ['Flutter', 'Payroll', 'Tax', 'PDF'],
    image: '/apps/global365-payroll.jpg',
    imageKind: 'wide',
    links: [
      { label: 'Website', href: 'https://global365.com/payroll' },
      { label: 'Features', href: 'https://global365.com/payroll_features' },
    ],
    accent: 'teal',
  },
  {
    title: 'Voice Wizard',
    role: 'AI Video · Synaptik.AI',
    year: '2023 — 2024',
    blurb:
      'Turns user videos into 35+ languages with accurate lip sync. Fast APIs, Figma-faithful UI, and a download pipeline that writes finished video to the gallery.',
    tags: ['Flutter', 'AI', 'Video', 'FastAPI'],
    mock: { title: 'Voice Wizard', line: '35+ languages · lip sync' },
    links: [{ label: 'GitHub', href: 'https://github.com/HammadMansha' }],
    accent: 'gold',
  },
  {
    title: 'Ultralytics YOLO',
    role: 'On-device AI · Amperor Tech',
    year: '2023 — 2024',
    blurb:
      'Real-time detection, segmentation, pose, and classification on phone — no server in the loop. Custom model loading and a fast NMS-free inference path.',
    tags: ['Flutter', 'YOLO', 'On-device AI', 'iOS / Android'],
    image: '/apps/yolo-1.jpg',
    imageKind: 'phone',
    links: [
      { label: 'App Store', href: 'https://apps.apple.com/us/app/ultralytics-yolo/id1452689527' },
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.ultralytics.yolo' },
    ],
    accent: 'teal',
  },
  {
    title: 'Lytics Lens',
    role: 'Media · PEMRA / Stack Intel',
    year: '2021 — 2023',
    blurb:
      'Regulatory news and live channels for PEMRA. Highlighted translation locked to video seek time, multi-channel streaming, and a published App Store release.',
    tags: ['Flutter', 'Live streaming', 'iOS'],
    mock: { title: 'Lytics Lens', line: 'Live channels · timed translation' },
    links: [{ label: 'GitHub', href: 'https://github.com/HammadMansha/Lytics-Lens' }],
    accent: 'gold',
  },
  {
    title: 'Satoshi Airline',
    role: 'Web3 Travel · Arbitech',
    year: '2023 — 2024',
    blurb:
      'Fly-to-earn lifestyle app with Google Maps, 2FA, mnemonic wallets, SAP / USDT / ANB transfers, NFT minting, and store listings on both platforms.',
    tags: ['Flutter', 'Web3', 'Wallet', 'NFT'],
    mock: { title: 'Satoshi Airline', line: 'Fly-to-earn · wallet · NFTs' },
    links: [
      { label: 'GitHub', href: 'https://github.com/HammadMansha/Satoshi-Airline' },
      { label: 'Docs', href: 'https://satoshiair.gitbook.io/docs/about/introduction' },
    ],
    accent: 'teal',
  },
  {
    title: 'Million Mart',
    role: 'Ecommerce · Stack Intel',
    year: '2021 — 2023',
    blurb:
      'Cross-platform shopping with voice search, shared carts, order PDFs, and email updates — shipped to the Play Store.',
    tags: ['Flutter', 'Ecommerce', 'Voice', 'REST'],
    mock: { title: 'Million Mart', line: 'Shared carts · voice search' },
    links: [{ label: 'GitHub', href: 'https://github.com/HammadMansha/Million-Mart' }],
    accent: 'gold',
  },
  {
    title: 'CNX Exchange',
    role: 'Crypto · Arbitech',
    year: '2023',
    blurb:
      'Live market data, buy/sell with amount sliders, Socket.IO ticks, P2P trades, and a referral loop for growth.',
    tags: ['Flutter', 'Socket.IO', 'P2P', 'Trading'],
    mock: { title: 'CNX Exchange', line: 'Live ticks · P2P trading' },
    links: [{ label: 'GitHub', href: 'https://github.com/HammadMansha/CNX_Exchange' }],
    accent: 'teal',
  },
]

export const gallery = [
  {
    src: '/apps/yolo-1.jpg',
    title: 'Ultralytics YOLO',
    caption: 'Live segmentation on device',
    href: 'https://apps.apple.com/us/app/ultralytics-yolo/id1452689527',
  },
  {
    src: '/apps/yolo-2.jpg',
    title: 'Ultralytics YOLO',
    caption: 'Object detection overlay',
    href: 'https://play.google.com/store/apps/details?id=com.ultralytics.yolo',
  },
  {
    src: '/apps/yolo-3.jpg',
    title: 'Ultralytics YOLO',
    caption: 'Pose estimation',
    href: 'https://apps.apple.com/us/app/ultralytics-yolo/id1452689527',
  },
  {
    src: '/apps/yolo-4.jpg',
    title: 'Ultralytics YOLO',
    caption: 'Classification + controls',
    href: 'https://play.google.com/store/apps/details?id=com.ultralytics.yolo',
  },
]

export const experience = [
  {
    company: 'Technupur',
    role: 'Senior Software Engineer',
    place: 'Lahore',
    dates: 'Apr 2024 — Present',
    points: [
      'Lead Flutter work on Global 365 Accounting and Payroll — money movement, tax, reporting, and print-ready checks.',
      'Ship shared UI systems, keyboard-first navigation, Excel exports, and email delivery for financial reports.',
    ],
  },
  {
    company: 'Synaptik.AI',
    role: 'Associate Software Engineer',
    place: 'Lahore',
    dates: 'Dec 2023 — Mar 2024',
    points: [
      'Built Voice Wizard’s translation UI and offline Face Recognition with Kotlin-hosted models and Flutter method channels.',
    ],
  },
  {
    company: 'Amperor Tech',
    role: 'Associate Software Engineer',
    place: 'Lahore',
    dates: 'Nov 2023 — Feb 2024',
    points: [
      'Delivered Ultralytics YOLO on iOS and Android: live camera inference and custom model support via Ultralytics HUB.',
    ],
  },
  {
    company: 'Arbitech Solutions',
    role: 'Software Engineer',
    place: 'Lahore',
    dates: 'Aug 2023 — Dec 2024',
    points: [
      'Shipped Satoshi Airline, Umer Pharmacy, and CNX Exchange — wallets, ecommerce checkout, and real-time trading.',
    ],
  },
  {
    company: 'Stack Intel',
    role: 'Software Engineer',
    place: 'Lahore',
    dates: 'Sep 2021 — Nov 2023',
    points: [
      'Published Lytics Lens, the PPP party app, and Million Mart — live media, 2FA, roles, and store releases.',
    ],
  },
]

export const skills = [
  { group: 'Mobile', items: ['Flutter', 'Dart', 'iOS', 'Android', 'Method Channels'] },
  { group: 'Architecture', items: ['Clean Architecture', 'MVVM', 'Bloc / Cubit', 'Riverpod', 'GetX', 'Provider'] },
  { group: 'Product', items: ['Firebase', 'REST APIs', 'Socket.IO', 'Payments', 'Google Maps', 'Push Notifications'] },
  { group: 'Specialties', items: ['On-device AI', 'Blockchain wallets', 'Fintech', 'Ecommerce', 'MySQL'] },
]
