import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FactsAndStats = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-green-100 p-8">
      <h1 className="text-3xl font-bold mb-4">Facts & Statistics</h1>
      <p className="mb-4">Here are some important facts and statistics about gun violence, safety measures, and their impact on teens and young adults:</p>
      
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>In 2021, there were 48,830 gun deaths in the US (Source: CDC)</li>
        <li>Firearms are the leading cause of death for children and teens in the US, surpassing motor vehicle accidents</li>
        <li>In 2022, there were 46 school shootings that resulted in injuries or deaths, the highest number since 1999</li>
        <li>States with stronger gun laws have lower gun death rates</li>
        <li>Over 393 million firearms are in civilian possession in the US</li>
        <li>Approximately 4.6 million children live in homes with unlocked, loaded firearms</li>
        <li>Teen suicide attempts involving firearms are fatal 90% of the time</li>
        <li>18 to 20-year-olds account for only 4% of the population but 17% of known homicide offenders</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Gun Control and Teens:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li>Many states have implemented minimum age requirements for gun purchases, typically set at 18 or 21</li>
        <li>Some states require parental consent for teens under 18 to purchase or possess firearms</li>
        <li>School-based gun violence prevention programs have shown promise in reducing youth access to firearms</li>
        <li>Safe storage laws have been associated with reduced rates of teen suicide and accidental shootings</li>
        <li>Youth-led advocacy groups have become increasingly influential in pushing for stricter gun control measures</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3">Additional Resources:</h2>
      <ul className="list-disc pl-5 mb-6 space-y-2">
        <li><a href="https://www.bradyunited.org/key-statistics" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Brady: Key Gun Violence Statistics</a></li>
        <li><a href="https://www.pewresearch.org/topic/gun-policy/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Pew Research Center: Gun Policy</a></li>
        <li><a href="https://www.gunviolencearchive.org/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Gun Violence Archive</a></li>
        <li><a href="https://everytownresearch.org/report/the-impact-of-gun-violence-on-children-and-teens/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Everytown: The Impact of Gun Violence on Children and Teens</a></li>
        <li><a href="https://www.americanprogress.org/article/gun-violence-america-state-state-analysis/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Center for American Progress: Gun Violence in America: A State-by-State Analysis</a></li>
      </ul>

      <Link to="/">
        <Button className="bg-blue-600 hover:bg-blue-700 text-white">Back to Home</Button>
      </Link>
    </div>
  );
};

export default FactsAndStats;