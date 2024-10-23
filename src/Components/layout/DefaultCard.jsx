
import { Card } from "flowbite-react";

export function DefaultCard() {
  return (
    <Card href="#" className="max-w-sm  w-full mx-auto"  style={{
        backgroundColor: 'rgba(108, 124, 92, 1)',
        color: 'rgba(255, 255, 255, 1)',
      }}>
      <h5 className="text-2xl font-bold tracking-tight text-center ">
        Ingredients
      </h5>
      <p className="font-normal text-white-700 dark:text-white-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
    </Card>
  );
}
