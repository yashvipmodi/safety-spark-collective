import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FactsAndStats = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Facts & Statistics</h1>
      <p className="mb-6">Understanding the impact of gun violence, especially on young adults and in educational settings, is crucial for promoting safety and prevention. Here are some important facts and statistics:</p>
      
      <h2 className="text-2xl font-semibold mb-3">General Gun Violence Statistics</h2>
      <ul className="list-disc pl-5 mb-6 space-y-3">
        <li>In 2021, there were 48,830 gun deaths in the US (Source: CDC). This number includes both intentional and accidental deaths, highlighting the widespread impact of gun violence on communities across the country.</li>
        <li>Firearms are the leading cause of death for children and teens in the US. This sobering statistic underscores the urgent need for gun safety measures and education targeted at young people.</li>
        <li>States with stronger gun laws have lower gun death rates. This correlation suggests that policy measures can play a significant role in reducing gun violence and protecting communities.</li>
        <li>Over 393 million firearms are in civilian possession in the US. This high number of firearms in circulation emphasizes the importance of responsible gun ownership and safe storage practices.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">School Shootings and Youth Gun Violence</h2>
      <ul className="list-disc pl-5 mb-6 space-y-3">
        <li>Between 2009 and 2020, there were 180 school shootings in the United States, resulting in 114 deaths and 242 injuries. These incidents have a profound impact on students, educators, and communities, often leading to long-lasting trauma and fear.</li>
        <li>In 2020, 4,368 children and teens up to age 19 died by gunfire. This statistic includes deaths from homicides, suicides, and unintentional shootings, highlighting the multifaceted nature of gun violence affecting young people.</li>
        <li>Approximately 3 million American children are exposed to shootings each year. This exposure can lead to various mental health issues, including PTSD, anxiety, and depression, affecting their overall well-being and academic performance.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Young Adults and Gun Violence</h2>
      <ul className="list-disc pl-5 mb-6 space-y-3">
        <li>Young adults aged 18-25 are disproportionately affected by gun violence, both as victims and perpetrators. This age group faces unique challenges related to mental health, substance abuse, and social pressures that can contribute to gun violence.</li>
        <li>Suicide accounts for nearly two-thirds of all gun deaths among young adults. This statistic emphasizes the critical need for mental health support and suicide prevention efforts targeted at this age group.</li>
        <li>Access to firearms significantly increases the risk of death by suicide. Studies show that reducing access to guns can be an effective suicide prevention strategy, particularly for impulsive acts among young adults.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Additional Resources</h2>
      <ul className="list-disc pl-5 mb-6 space-y-3">
        <li><a href="https://www.bradyunited.org/key-statistics" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Brady: Key Gun Violence Statistics</a> - Comprehensive data on gun violence in America, including its impact on different age groups and communities.</li>
        <li><a href="https://www.pewresearch.org/topic/gun-policy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Pew Research Center: Gun Policy</a> - In-depth research and analysis on public opinion regarding gun policies and their effectiveness.</li>
        <li><a href="https://www.gunviolencearchive.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Gun Violence Archive</a> - Real-time data on gun-related incidents across the United States, including detailed information on school shootings and youth-related gun violence.</li>
        <li><a href="https://everytownresearch.org/report/the-impact-of-gun-violence-on-children-and-teens/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Everytown: The Impact of Gun Violence on Children and Teens</a> - Comprehensive report on how gun violence affects young people, including statistics and prevention strategies.</li>
      </ul>

      <p className="mb-6">Understanding these statistics is crucial for developing effective strategies to prevent gun violence and promote safety, especially among young adults and in educational settings. By staying informed, we can work together to create safer communities and support those affected by gun violence.</p>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default FactsAndStats;