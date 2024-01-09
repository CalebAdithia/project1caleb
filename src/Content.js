import Card from "./Card";

const data = 
[
  {
    'date' : '03 Oct 2021',
    'title' : 'Middle UI/UX Designer',
    'list' : [
      '3+ years of consumer design experience.',
      'Strong portofolio of completed design projects.'
    ]
  },
  {
    'date' : '01 Oct 2021',
    'title' : 'Senior PHP Developer',
    'list' : [
      '3+ years of consumer design experience.',
      'Strong portofolio of completed design projects.'
    ]
  },
  {
    'date' : '21 Sept 2021',
    'title' : 'Middle Graphic Designer',
    'list' : [
      '3+ years of consumer design experience.',
      'Strong portofolio of completed design projects.'
    ]
  },
  {
    'date' : '19 Sept 2021',
    'title' : 'Senior Ruby Developer',
    'list' : [
      '3+ years of consumer design experience.',
      'Strong portofolio of completed design projects.'
    ]
  },
];

const Content = () => {
  return (
    <div className="Content pt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {data.map(x => <Card data={x} ></Card>)}
    </div>
  );
};

export default Content;
