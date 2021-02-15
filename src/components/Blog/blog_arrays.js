//Blog Object
import Fetch from './fetch';
import post1 from './md/7_Easy_Steps_to_Deploying_a_Multipage_site_to_GH-Pages.md';
import post2 from './md/Hiss_at_vacuum_cleaner_kitty_time.md';
import post3 from './md/expresso_medium_and_that_dripper_iced_kopi_luwak.md';
import post4 from './md/gummi_bears_tart_pie_cotton_candy_htootsie_roll_cake_icing_brownie.md';
import post5 from './md/essex_girls_gutted_could_be_a_bit_of_a_git_tallywhacker_blighty.md';
import post6 from './md/sales_assests_partnership_termsheet_monetization_business_to_consumer_pitch.md';
import post7 from './md/shower_me_with_divine_love.md';

export const blogArray = [
  {
    img: './images/EZPZ-min.png',
    title: '7 Easy Steps to Deploying a Multiroute site to GH-Pages',
    blurb:
      'Hit you unexpectedly purr purr purr until owner pets why owner not pet me hiss scratch meow if it smells like fish eat as much as you wish',
    article:
      'Cat ipsum dolor sit amet, gimme attention gimme attention gimme attention gimme attention gimme attention gimme attention just kidding i dont want it anymore meow bye look at dog hiiiiiisssss. Weigh eight pounds but take up a full-size bed trip owner up in kitchen i want food purr purr purr until owner pets why owner not pet me hiss scratch meow bite off humans toes. Cereal boxes make for five star accommodation i am the best yet massacre a bird in the living room and then look like the cutest and most innocent animal on the planet or put butt in owners face, yet sun bathe, for the cat was chasing the mouse. Go into a room to decide you didnt want to be in there anyway. Scream at teh bath pounce on unsuspecting person yet lick masters hand at first then bite because im moody eat fish on floor yet find something else more interesting. I like fish ���� im so hungry i’m so hungry but ew not for that so ooooh feather moving feather! yet time to go zooooom. I will ruin the couch with my claws roll on the floor purring your whiskers off and rub face on owner. Lie on your belly and purr when you are asleep scratch my tummy actually i hate you now fight me yet its 3am, time to create some chaos , for human is behind a closed door, emergency! abandoned! meeooowwww!!! and pretend you want to go out but then dont for kitty run to human with blood on mouth from frenzied attack on poor innocent mouse, dont i look cute?. Push your water glass on the floor. Lies down . Catching very fast laser pointer when in doubt, wash yet curl up and sleep on the freshly laundered towels, for cats secretly make all the worlds muffins. Reward the chosen human with a slow blink leave hair everywhere allways wanting food, ignore the squirrels, youll never catch them anyway get scared by doggo also cucumerro mark territory. Your pillow is now my pet bed. ',
    date: ' February 15, 2021',
  },
  /*   {
    img: './images/parks2Go.jpg',
    title: 'Espresso medium and, that, dripper iced kopi-luwak ',
    blurb:
      'Sit macchiato white sit froth, single shot id, so foam iced so crema. Roast id single origin extraction, galão, café au lait flavour, to go decaffeinated lungo cream siphon.',
    article:
      'Instant mocha, blue mountain sit skinny plunger pot turkish. Fair trade, as saucer aroma variety caramelization extra  aged trifecta robusta java. Extraction cultivar as bar , percolator beans redeye caffeine viennese irish seasonal. French press grinder rich caffeine sweet acerbic sweet espresso coffee barista coffee. In mocha black saucer single shot froth, cinnamon galão variety chicory siphon ristretto.!',
    date: ' February 27, 2021',
  },
  {
    img: './images/bikeShop.jpg',
    title:
      'Gummi bears tart pie cotton candy tootsie roll cake icing brownie. Cake I love oat cake.',
    blurb: 'Candy pie I love I love powder croissant icing cupcake.',
    article:
      'Cupcake ipsum dolor sit amet oat cake. Pie icing cheesecake tootsie roll fruitcake toffee wafer gummi bears. Croissant danish muffin I love bonbon tart jujubes jujubes toffee. Cookie I love icing gummi bears icing sweet roll. Lemon drops tart lollipop wafer ice cream. Bear claw marzipan pudding caramels. Tootsie roll sugar plum cake cheesecake macaroon bonbon pudding sweet. Croissant cookie tart chocolate cake icing toffee macaroon tiramisu I love. Dragée chocolate jujubes candy canes brownie I love pudding gummies. Dragée cookie cookie chocolate powder toffee cotton candy caramels. I love donut chocolate cake ice cream brownie cheesecake dragée tiramisu. Cupcake caramels cupcake fruitcake fruitcake sweet bear claw. Bonbon cheesecake sweet topping chocolate cake bear claw biscuit. Bear claw danish sweet jelly-o muffin jelly-o halvah brownie. Toffee sesame snaps carrot cake chupa chups pie dragée lemon drops jelly beans cheesecake. I love tiramisu I love cake lollipop chocolate I love sweet bear claw. Candy jelly beans I love chocolate cake. Tart cupcake danish dessert brownie. Gummi bears toffee bonbon chocolate cake jelly beans dragée cake. Jujubes tart carrot cake. Candy I love ice cream jelly-o cake. Carrot cake cake danish brownie dessert.',
    date: ' March 27, 2021',
  },
  {
    img: './images/WD3.jpg',
    title: 'Essex girls gutted could be a bit of a git tallywhacker blighty',
    blurb:
      'Plum pudding Bad Wolf red telephone box naff houlligan Northeners, copped a bollocking ask your mother if crumpets at the boozer, chuffed chav football Sherlock',
    article:
      'Pommy ipsum baffled pulled a right corker in a pickle proper doolally put me soaps back on, utter shambles ey up a fiver middle class bowler hat laughing gear, double dutch bargain Betty Doctor Who oopsy-daisies any road, best be off Bad Wolf. Flog flog a dead horse Sonic Screwdriver barmy chav, chinwag bloody shambles quid. Chap a comely wench apple and pears Time Lord tally-ho, up at the crack of dawn anorak I could reet fancy a have a bash, splendid Essex girls doofer. Copper naff off well fit meat and two veg wind up pie-eyed fake tan laughing gear, marmite bog off its the dogs bollocks one feels that cor blimey. 221B Baker Street pork dripping sweets pants Southeners brilliant nutter skive, hedgehog pork scratchings curry saucear kid blimey well fit. Bugger flog a dead horse cobbles gravy cheese and chips, a tenner one feels that. You avin a laugh conked him one on the nose the fuzz copped a bollocking have a butchers at this cockney gob her Majestys pleasure, Essex girls gutted could be a bit of a git tallywhacker blighty.',
    date: ' April 27, 2021',
  },
  {
    img: './images/PIF.jpg',
    title:
      'Sales assets partnership termsheet monetization business-to-consumer pitch',
    blurb:
      'Strategy interaction design ecosystem early adopters metrics deployment infographic angel investor learning curve monetization',
    article:
      'User experience branding business plan seed money. Early adopters ramen hypotheses responsive web design vesting period influencer buzz branding holy grail startup infographic user experience. IPhone traction holy grail agile development pivot seed round stealth metrics. IPad virality release. Social media facebook creative iPad mass market freemium early adopters iteration entrepreneur success market. Handshake value proposition analytics venture agile development paradigm shift infographic freemium gen-z customer. Deployment vesting period growth hacking research & development non-disclosure agreement user experience product management value proposition alpha client learning curve leverage startup sales. Influencer venture creative value proposition iPhone focus advisor research & development incubator. Interaction design business-to-consumer conversion ramen burn rate launch party seed money accelerator investor funding founders product management scrum project. Twitter agile development crowdsource.',
    date: ' May 27, 2021',
  },
  {
    img: './images/PRW.jpg',
    title: 'Shower me with Divine Love',
    blurb:
      'Charms spirit guides card readings, lavender meditate Sacred Geometry healer practitioner chakras healing goddess empath Chinese medicine Light Worker love.',
    article:
      'Spiritual ipsum dolor amet nepal chanting Pink Himalayan Salt stones, divine love spiritual healing chakra clearing. Flower of Life love angels chanting practitioner meditate Buddha shamantic Sacred Geometry goddess lavender. Peace transformation fibonacci, dance harmonic meditate empath candles. Pink Himalayan Salt Buddha chakra clearing bells stones massage manifestation spiritual healing charms Sacred Geometry goddess transformation enlighten. Peace love awakening fibonacci chakras. Angels bells Pink Himalayan Salt sage energy healing. Charms spirit guides card readings, lavender meditate Sacred Geometry healer practitioner chakras healing goddess empath Chinese medicine Light Worker love. Oracle stones manifestation goddess angels Nepal Pink Himalayan Salt, Chinese medicine harmonic. Transformation meditate candles, manifestation massage empath spiritual healing oracle dance pendulum Essential Oils. Pink Himalayan Salt Essential Oils reincarnation candles dance pendulum. Chinese medicine angels peace stones harmonic manifestation tarot Reiki love candles spiritual healing oracle massage herbalist full moon. Angels divine Buddha harmonic card readings massage.',
    date: ' June 27, 2021',
  }, */
];
//individual arrays
export const imageArray = [
  './images/EZPZ-min.png',
  './images/parks2Go.jpg',
  './images/bikeShop.jpg',
  './images/WD3.jpg',
  './images/PIF.jpg',
  './images/PRW.jpg',
];
export const imageAlts = [
  'homepage image of Faith Specialty Plates website',
  'homepage image of Parks2Go website',
  'homepage image of the BikeShop website',
  'homepage image of WD3 form',
  'homepage image of Pay It Forward',
  'homepage image of Post It website',
];
export const titleArray = [
  '7 Easy Steps to Deploying a Multiroute site to GH-Pages',
  'Espresso medium and, that, dripper iced kopi-luwak ',
  'Candy pie I love I love powder croissant icing cupcake.',
  'Essex girls gutted could be a bit of a git tallywhacker blighty',
  'Sales assets partnership termsheet monetization business-to-consumer pitch',
  'Shower me with Divine Love',
];
export const blurbArray = [
  'Hit you unexpectedly purr purr purr until owner pets why owner not pet me hiss scratch meow if it smells like fish eat as much as you wish',
  'Sit macchiato white sit froth, single shot id, so foam iced so crema. Roast id single origin extraction, galão, café au lait flavour, to go decaffeinated lungo cream siphon.',
  'Gummi bears tart pie cotton candy tootsie roll cake icing brownie. Cake I love oat cake.',
  'Candy pie I love I love powder croissant icing cupcake.',
  'Plum pudding Bad Wolf red telephone box naff houlligan Northeners, copped a bollocking ask your mother if crumpets at the boozer, chuffed chav football Sherlock.',
  'Strategy interaction design ecosystem early adopters metrics deployment infographic angel investor learning curve monetization',
  'Charms spirit guides card readings, lavender meditate Sacred Geometry healer practitioner chakras healing goddess empath Chinese medicine Light Worker love.',
];
/* export const articleArray = [
  'Cat ipsum dolor sit amet, bird bird bird bird bird bird human why take bird out i could have eaten that so attack like a vicious monster. Run at 3am present belly, scratch hand when stroked and attack like a vicious monster steal the warm chair right after you get up stare at wall turn and meow stare at wall some more meow again continue staring and claws in the eye of the beholder for morning beauty routine of licking self. Lick arm hair purrrrrr pee in humans bed until he cleans the litter box and more napping, more napping all the napping is exhausting cat meoooow i iz master of hoomaan, not hoomaan master of i, oooh damn dat dog or lick sellotape pretend not to be evil. Naughty running cat i shredded your linens for you. Murder hooman toes. Cereal boxes make for five star accommodation intrigued by the shower carefully drink from water glass and then spill it everywhere and proceed to lick the puddle climb into cupboard and lick the salt off rice cakes or toy mouse squeak roll over. In the middle of the night i crawl onto your chest and purr gently to help you sleep try to jump onto window and fall while scratching at wall poop on couch and i show my fluffy belly but its a trap!',
  'Instant mocha, blue mountain sit skinny plunger pot turkish. Fair trade, as saucer aroma variety caramelization extra  aged trifecta robusta java. Extraction cultivar as bar , percolator beans redeye caffeine viennese irish seasonal. French press grinder rich caffeine sweet acerbic sweet espresso coffee barista coffee. In mocha black saucer single shot froth, cinnamon galão variety chicory siphon ristretto.!',
  ' Cupcake ipsum dolor sit amet oat cake. Pie icing cheesecake tootsie roll fruitcake toffee wafer gummi bears. Croissant danish muffin I love bonbon tart jujubes jujubes toffee. Cookie I love icing gummi bears icing sweet roll. Lemon drops tart lollipop wafer ice cream. Bear claw marzipan pudding caramels. Tootsie roll sugar plum cake cheesecake macaroon bonbon pudding sweet. Croissant cookie tart chocolate cake icing toffee macaroon tiramisu I love. Dragée chocolate jujubes candy canes brownie I love pudding gummies. Dragée cookie cookie chocolate powder toffee cotton candy caramels. I love donut chocolate cake ice cream brownie cheesecake dragée tiramisu. Cupcake caramels cupcake fruitcake fruitcake sweet bear claw. Bonbon cheesecake sweet topping chocolate cake bear claw biscuit. Bear claw danish sweet jelly-o muffin jelly-o halvah brownie. Toffee sesame snaps carrot cake chupa chups pie dragée lemon drops jelly beans cheesecake. I love tiramisu I love cake lollipop chocolate I love sweet bear claw. Candy jelly beans I love chocolate cake. Tart cupcake danish dessert brownie. Gummi bears toffee bonbon chocolate cake jelly beans dragée cake. Jujubes tart carrot cake. Candy I love ice cream jelly-o cake. Carrot cake cake danish brownie dessert.',
  ' Pommy ipsum baffled pulled a right corker in a pickle proper doolally put me soaps back on, utter shambles ey up a fiver middle class bowler hat laughing gear, double dutch bargain Betty Doctor Who oopsy-daisies any road, best be off Bad Wolf. Flog flog a dead horse Sonic Screwdriver barmy chav, chinwag bloody shambles quid. Chap a comely wench apple and pears Time Lord tally-ho, up at the crack of dawn anorak I could reet fancy a have a bash, splendid Essex girls doofer. Copper naff off well fit meat and two veg wind up pie-eyed fake tan laughing gear, marmite bog off its the dogs bollocks one feels that cor blimey. 221B Baker Street pork dripping sweets pants Southeners brilliant nutter skive, hedgehog pork scratchings curry saucear kid blimey well fit. Bugger flog a dead horse cobbles gravy cheese and chips, a tenner one feels that. You avin a laugh conked him one on the nose the fuzz copped a bollocking have a butchers at this cockney gob her Majestys pleasure, Essex girls gutted could be a bit of a git tallywhacker blighty.',
  ' User experience branding business plan seed money. Early adopters ramen hypotheses responsive web design vesting period influencer buzz branding holy grail startup infographic user experience. IPhone traction holy grail agile development pivot seed round stealth metrics. IPad virality release. Social media facebook creative iPad mass market freemium early adopters iteration entrepreneur success market. Handshake value proposition analytics venture agile development paradigm shift infographic freemium gen-z customer. Deployment vesting period growth hacking research & development non-disclosure agreement user experience product management value proposition alpha client learning curve leverage startup sales. Influencer venture creative value proposition iPhone focus advisor research & development incubator. Interaction design business-to-consumer conversion ramen burn rate launch party seed money accelerator investor funding founders product management scrum project. Twitter agile development crowdsource.',
  ' Spiritual ipsum dolor amet nepal chanting Pink Himalayan Salt stones, divine love spiritual healing chakra clearing. Flower of Life love angels chanting practitioner meditate Buddha shamantic Sacred Geometry goddess lavender. Peace transformation fibonacci, dance harmonic meditate empath candles. Pink Himalayan Salt Buddha chakra clearing bells stones massage manifestation spiritual healing charms Sacred Geometry goddess transformation enlighten. Peace love awakening fibonacci chakras. Angels bells Pink Himalayan Salt sage energy healing. Charms spirit guides card readings, lavender meditate Sacred Geometry healer practitioner chakras healing goddess empath Chinese medicine Light Worker love. Oracle stones manifestation goddess angels Nepal Pink Himalayan Salt, Chinese medicine harmonic. Transformation meditate candles, manifestation massage empath spiritual healing oracle dance pendulum Essential Oils. Pink Himalayan Salt Essential Oils reincarnation candles dance pendulum. Chinese medicine angels peace stones harmonic manifestation tarot Reiki love candles spiritual healing oracle massage herbalist full moon. Angels divine Buddha harmonic card readings massage.',
]; */
export const articleArray = [post1, post2, post3, post4, post5, post6];

export const dateArray = [
  'February 15, 2021',
  'February 27, 2021',
  'March 27, 2021',
  'April 27, 2021',
  'May 27, 2021',
  'June 27, 2021',
];
