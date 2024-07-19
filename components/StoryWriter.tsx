"use client"
import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

function StoryWriter() {
  const [story, setStory] = useState<string>("");
  const [pages, setPages] = useState<number | undefined>();

  return (
    <div className="flex flex-col container">
      <section className="flex-1 flex flex-col border border-purple-300 rounded-md p-10 space-y-2">
        <Textarea
          value={story}
          onChange={(e) => setStory(e.target.value)}
          className='flex-1 text-black'
          placeholder='As you wish to generate the stories, enter your ideas here...'
        />
        <Select onValueChange={(value) => setPages(parseInt(value))}>
          <SelectTrigger>
            <SelectValue placeholder="How many pages should the story be?" />
          </SelectTrigger>
          <SelectContent className='w-full'>
            {Array.from({ length: 10 }, (_, i) => (
              <SelectItem key={i} value={String(i + 1)}>{i + 1}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button disabled={!story || !pages} className='w-full' size='lg'>
          Let's Generate !!
        </Button>
      </section>
      <section className="flex-1 pb-5 mt-5"></section>
    </div>
  );
}

export default StoryWriter;
