'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const testimonials = [
  {
    name: 'Antonio',
    avatar: 'A',
    title: 'Software Engineer',
    description: "This is the best application I've used!",
  },
  {
    name: 'Aiden',
    avatar: 'A',
    title: 'Product Manager',
    description: 'Simply brilliant!',
  },
  {
    name: 'Michelle',
    avatar: 'A',
    title: 'UX Designer',
    description: "It's so simple but so powerful!",
  },
  {
    name: 'Jonas',
    avatar: 'A',
    title: 'Project Manager',
    description: "I can't live without it!",
  },
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl font-extrabold mb-4 text-white ">
        Testimonials
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card
            key={item.description}
            className="bg-[#192339] border-none text-white"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent>{item.description}</CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  );
};
