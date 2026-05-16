const fs = require('fs');
const path = require('path');

const posts = [
  {
    slug: 'diy-mobile-workbench-dewalt-dw745',
    title: 'DIY Mobile Workbench with Dewalt DW745',
    category: 'DIY Projects',
    date: '2020-08-17',
    youtubeVideoId: 'buZD18Yqp28',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2020/08/diy-mobile-workbench-with-dewalt-dw745_17.html',
    excerpt: 'Build a sturdy, mobile workbench integrating the Dewalt DW745 table saw. Perfect for small garage workshops needing flexibility and organization.',
    heroImage: '/images/placeholder.svg',
    tags: ['Dewalt', 'Workbench', 'Table Saw', 'Workshop'],
    body: '## Planning the Workbench\n\nWhen working in a small garage, mobility is key. I designed this workbench to fit my Dewalt DW745 table saw perfectly, ensuring a flush surface for outfeed.\n\n## Cutting the Plywood\n\nUsing 18mm birch plywood provides the rigidity needed for a heavy saw setup. \n\n## Assembly and Casters\n\nTo make it mobile, I used four heavy-duty locking casters. When locked, the table doesn\'t move an inch while pushing heavy lumber through the saw.',
    resources: [
      { label: 'Dewalt DW745', url: '#', active: true },
      { label: 'Heavy Duty Casters', url: '#', active: true }
    ],
    downloads: [
      { label: 'SketchUp Model', url: '#', fileType: 'skp', size: '2.4MB' }
    ]
  },
  {
    slug: 'diy-raised-koi-pond-with-glass-window',
    title: 'DIY Raised Koi Pond With Glass Window',
    category: 'DIY Projects',
    date: '2020-08-20',
    youtubeVideoId: 'mZM4t4xuAjY',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2020/08/two-years-ago-i-started-building-my.html',
    excerpt: 'A complete build log of my raised outdoor Koi pond featuring a viewing glass window and a comprehensive filtration system.',
    heroImage: '/images/placeholder.svg',
    tags: ['Pond', 'Koi', 'Outdoor', 'Concrete'],
    body: '## Digging and Foundation\n\nA solid concrete foundation is absolutely critical for a pond holding this much water weight, especially with a glass window.\n\n## Constructing the Walls\n\nI built the walls using hollow concrete blocks, reinforced with rebar and filled with concrete.\n\n## Installing the Glass Window\n\nThe viewing window brings the pond to life. It requires laminated toughened glass and aquatic-safe silicone to seal perfectly.',
    resources: [
      { label: 'Aquatic Silicone', url: '#', active: true },
      { label: 'Pond Liner Options', url: '#', active: true }
    ],
    downloads: []
  },
  {
    slug: 'diy-wood-pine-garden-fence',
    title: 'DIY Wood Pine Garden Fence',
    category: 'DIY Projects',
    date: '2020-08-28',
    youtubeVideoId: '212mqc57zf4',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2020/08/diy-wood-pine-garden-fence.html',
    excerpt: 'How to build an elegant horizontal wood pine garden fence from scratch, treating the wood for outdoor longevity.',
    heroImage: '/images/placeholder.svg',
    tags: ['Fence', 'Garden', 'Outdoor', 'Pine'],
    body: '## Setting the Posts\n\nProperly aligning and cementing the metal fence posts guarantees a fence that won\'t lean over time.\n\n## Treating the Pine Wood\n\nRaw pine rots quickly outdoors. I applied two coats of protective outdoor wood stain and sealer.\n\n## Installing the Planks\n\nA horizontal orientation gives the garden a modern look. Using scrap wood blocks as spacers ensured consistent gaps between each plank.',
    resources: [],
    downloads: []
  },
  {
    slug: 'installing-irwin-record-woodworking-vice',
    title: 'Installing the Irwin Record Woodworking Vice 7" - 175mm',
    category: 'Tools',
    date: '2020-10-05',
    youtubeVideoId: 'lvs4UOgQ2Ao',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2020/10/installing-irwin-record-woodworking.html',
    excerpt: 'A quick guide on flush-mounting a heavy-duty Irwin Record woodworking vice to a heavy workbench.',
    heroImage: '/images/placeholder.svg',
    tags: ['Vise', 'Irwin', 'Workbench Upgrade'],
    body: '## Routing the Recess\n\nTo make the vice jaws perfectly flush with the workbench surface, I routed a recess underneath the bench top.\n\n## Adding Wooden Jaw Faces\n\nProtecting your workpieces from the cast iron jaws is crucial. I attached custom hardwood jaws using countersunk screws.',
    resources: [{ label: 'Irwin Record Vise', url: '#', active: true }],
    downloads: []
  },
  {
    slug: 'garage-workshop-remodel-french-cleat-system',
    title: 'Garage Workshop Remodel With French Cleat System',
    category: 'DIY Projects',
    date: '2020-10-12',
    youtubeVideoId: 'IYgsJticGjg',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2020/10/over-past-few-months-ive-been.html',
    excerpt: 'Upgrading the workshop by replacing old cabinets with a highly modular and organized French Cleat wall system.',
    heroImage: '/images/placeholder.svg',
    tags: ['French Cleat', 'Organization', 'Workshop'],
    body: '## Why French Cleats?\n\nThey offer unmatched flexibility. As your tool collection grows, you can easily shift holders around without drilling new holes in the wall.\n\n## Building the Tool Holders\n\nI built custom holders for clamps, power tools, and measuring tape using scrap 12mm plywood.',
    resources: [],
    downloads: []
  },
  {
    slug: 'router-table-insert-plate-makita-rtc0700c',
    title: 'Router table insert plate for Makita RTC0700C',
    category: 'Tools',
    date: '2020-10-20',
    youtubeVideoId: 'm5gEMHSLuhc',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2020/10/one-of-upgrades-i-planned-to-do-on.html',
    excerpt: 'Making a custom router insert plate using aluminum and integrating the Makita compact router into my workbench.',
    heroImage: '/images/placeholder.svg',
    tags: ['Router Table', 'Makita', 'Aluminum'],
    body: '## Sourcing the Aluminum\n\nI ordered a 6mm thick aluminum plate online, thick enough to prevent deflection but thin enough not to lose too much bit height.',
    resources: [],
    downloads: []
  },
  {
    slug: 'diy-3-1-1-seater-outdoor-sofa',
    title: 'DIY 3+1+1 Seater Outdoor Sofa (Free SketchUp Plan + Cut List)',
    category: 'DIY Projects',
    date: '2021-01-15',
    youtubeVideoId: 'PmAUPDsTPBs',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2021/01/diy-311-seater-outdoor-sofa.html',
    excerpt: 'Build your own stylish outdoor patio furniture. Includes free SketchUp plans and a full cut list.',
    heroImage: '/images/placeholder.svg',
    tags: ['Outdoor Furniture', 'Patio', 'Sofa'],
    body: '## Creating the Frame\n\nThe entire frame is built using standard construction pine. I used pocket hole joinery for quick and strong assembly unseen from the outside.',
    resources: [],
    downloads: [{ label: 'Cut List & SketchUp', url: '#', fileType: 'pdf', size: '1.2MB' }]
  },
  {
    slug: 'diy-concrete-outdoor-garden-lamp',
    title: 'DIY Concrete Outdoor Garden Lamp',
    category: 'DIY Projects',
    date: '2021-04-10',
    youtubeVideoId: 'O14RJmDUqto',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2021/04/this-video-i-will-show-you-how-i-did.html',
    excerpt: 'Creating an atmospheric, modern concrete garden pillar light with an acrylic diffuser.',
    heroImage: '/images/placeholder.svg',
    tags: ['Concrete', 'Lighting', 'Garden'],
    body: '## Building the Mold\n\nI constructed the mold using melamine. Melamine has a perfectly smooth surface, ensuring the concrete cures with a sleek, polished look.',
    resources: [],
    downloads: []
  },
  {
    slug: '3-in-1-miter-saw-station-kreg-track-stop',
    title: '3 in 1 Miter Saw Station Build With KREG Track & Stop System - Shop Storage Upgrade',
    category: 'Tools',
    date: '2021-06-25',
    youtubeVideoId: 'oef2jjSo2Pk',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2021/06/3-in-1-miter-saw-station-with-kreg.html',
    excerpt: 'A massive shop upgrade featuring a miter saw station with integrated Kreg Track & Stop system and abundant drawer storage.',
    heroImage: '/images/placeholder.svg',
    tags: ['Miter Saw', 'Kreg', 'Storage'],
    body: '## The Extension Wings\n\nThe long wings combined with the Kreg track make repeatable cuts effortless without constant measuring.',
    resources: [{ label: 'Kreg Track System', url: '#', active: true }],
    downloads: []
  },
  {
    slug: 'ortur-laser-master-2-pro-engraver-cutter',
    title: 'ORTUR Laser Master 2 Pro - Engraver & Cutter - Unboxing, Assembly, Setup And Testing',
    category: 'Laser Engraving',
    date: '2021-08-05',
    youtubeVideoId: '_YEsXtl6tNc',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2021/08/affiliate-link-to-buy-laser-master-2.html',
    excerpt: 'Reviewing and assembling the Ortur Laser Master 2 Pro. Testing cutting capabilities on wood and engraving parameters.',
    heroImage: '/images/placeholder.svg',
    tags: ['Ortur', 'Laser Engraving', 'Review'],
    body: '## Assembly and Wiring\n\nThe setup is straightforward. Proper wire management is vital to ensure the laser head moves freely during operation.',
    resources: [{ label: 'Ortur Laser Master 2 Pro', url: '#', active: true }],
    downloads: []
  },
  {
    slug: 'diy-live-edge-shelves',
    title: 'DIY Live Edge Shelves | How To Build',
    category: 'DIY Projects',
    date: '2022-02-14',
    youtubeVideoId: 'owLd0lwZnPc',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2022/02/in-this-video-i-will-show-you-how-ive.html',
    excerpt: 'How to prepare, sand, finish, and mount beautiful live edge wood shelving using heavy duty floating brackets.',
    heroImage: '/images/placeholder.svg',
    tags: ['Live Edge', 'Woodworking', 'Shelving'],
    body: '## Removing the Bark\n\nUsing a draw knife and a chisel, I carefully removed the bark to reveal the natural grain underneath.',
    resources: [],
    downloads: []
  },
  {
    slug: 'longer-lk5-pro-3d-printer',
    title: 'LONGER LK5 Pro - 3D Printer - Unbox & Setup',
    category: '3D Printing',
    date: '2022-03-22',
    youtubeVideoId: 'H090ZyOaytw',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2022/03/you-need-to-buy-this-3d-printer-longer.html',
    excerpt: 'In-depth unboxing, setup, and first print tests for the Longer LK5 Pro large format 3D printer.',
    heroImage: '/images/placeholder.svg',
    tags: ['3D Printing', 'Longer LK5 Pro', 'Review'],
    body: '## Massive Build Volume\n\nThis printer offers a 300x300x400mm build volume, making it perfect for printing large one-piece props or functional parts.',
    resources: [{ label: 'Longer LK5 Pro', url: '#', active: true }],
    downloads: []
  },
  {
    slug: 'diy-round-outdoor-patio-table-6-seater',
    title: 'DIY Round Outdoor Patio Table - 6 Seater - FREE PLANS',
    category: 'DIY Projects',
    date: '2022-05-18',
    youtubeVideoId: '4s2UpUcYqTM',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2022/05/diy-outdoor-table-6-seater.html',
    excerpt: 'Building a robust round patio table that easily seats six, featuring an X-base design for stability. Free plans included.',
    heroImage: '/images/placeholder.svg',
    tags: ['Patio', 'Table', 'Outdoor Furniture'],
    body: '## Cutting the Perfect Circle\n\nI built a simple circle-cutting jig for my router to cut the massive tabletop precisely round.',
    resources: [],
    downloads: [{ label: 'Free Plans PDF', url: '#', fileType: 'pdf', size: '2MB' }]
  },
  {
    slug: 'laserpecker-2-pro-portable-laser-engraver',
    title: 'LaserPecker 2 Pro - The Best Portable Laser Engraver & Laser Cutter',
    category: 'Laser Engraving',
    date: '2023-01-20',
    youtubeVideoId: 'lHK7ZmizQJA',
    originalBloggerUrl: 'https://pedrogameirodiy.blogspot.com/2023/01/laserpecker-2-pro.html',
    excerpt: 'Testing the incredibly fast and portable LaserPecker 2 Pro galvanometer laser on metal, wood, and leather.',
    heroImage: '/images/placeholder.svg',
    tags: ['LaserPecker', 'Portable', 'Engraver', 'Review'],
    body: '## Galvo Laser Speeds\n\nUnlike traditional diode lasers on rails, the galvo head uses mirrors to direct the beam, resulting in engraving speeds up to 10x faster.',
    resources: [{ label: 'LaserPecker 2 Pro', url: '#', active: true }],
    downloads: []
  }
];

const dir = path.join(process.cwd(), 'src', 'content', 'posts');
fs.mkdirSync(dir, { recursive: true });

posts.forEach(p => {
  fs.writeFileSync(path.join(dir, p.slug + '.json'), JSON.stringify(p, null, 2));
});

console.log('Generated 14 posts');
