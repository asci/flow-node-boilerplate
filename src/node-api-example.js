import typeof util from 'util';
import typeof fs from 'fs';
import type { Stats } from 'fs';

const { promisify }: util = require('util');
const { stat }: fs = require('fs');

const getStats: (path: string) => Promise<Stats> = promisify(stat);

async function main(): Promise<string> {
  async function callStat(): Promise<string> {
    const stats: Stats = await getStats('.');
    return `This directory is owned by ${stats.uid}`;
  }

  const result: string = await callStat();
  return result;
}

module.exports = main;
export type Main = () => Promise<string>;
