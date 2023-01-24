"use client";

import { Card, Skeleton, Text } from "@opendash/ui";
import Link from "next/link";
import React from "react";
import { FiPackage } from "react-icons/fi";
import { api } from "src/lib/trpc";

const AppsList = () => {
  const { data: apps } = api.apps.getApps.useSWR(void 0, {
    suspense: true,
  });
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      {apps!.map((app) => (
        <Link
          key={app.id}
          href={`/apps/${app.id}`}
          className="group hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          <Text weight="semi-bold" className="leading-6">
            {app.displayName}
          </Text>
          <Card
            as="div"
            rounded="lg"
            className="relative overflow-hidden"
            bordered
          >
            <Card.Body className="relative  aspect-video" size="medium">
              <CardImage />

              <div className="w-full h-full grid place-items-center relative z-10">
                <div className="rounded-lg w-16 h-16 bg-radix-slate1 flex justify-center items-center shadow-md">
                  <FiPackage size={32} />
                </div>
              </div>
            </Card.Body>
          </Card>
          <Text size="2">2 pages</Text>
        </Link>
      ))}
    </div>
  );
};

export default AppsList;

const CardImage = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
      {/* <img
          src="https://images.unsplash.com/photo-1616161616161-1b1b1b1b1b1b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          className="w-full h-full object-cover"
        /> */}
    </div>
  );
};

export const AppsListSkeleton = () => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      <div>
        <Skeleton className="leading-none mb-2 w-44">
          <Text size="1" className="invisible">
            xxxx
          </Text>
        </Skeleton>
        <Card
          as="div"
          rounded="lg"
          className="relative overflow-hidden animate-pulse"
        >
          <Skeleton className="aspect-video" />
        </Card>
        <Skeleton className="mt-1 w-24">
          <Text size="1" className="invisible">
            xxxx
          </Text>
        </Skeleton>
      </div>
      <div>
        <Skeleton className="leading-none mb-2 w-44">
          <Text size="1" className="invisible">
            xxxx
          </Text>
        </Skeleton>
        <Card
          as="div"
          rounded="lg"
          className="relative overflow-hidden animate-pulse"
        >
          <Skeleton className="aspect-video" />
        </Card>
        <Skeleton className="mt-1 w-24">
          <Text size="1" className="invisible">
            xxxx
          </Text>
        </Skeleton>
      </div>
      <div>
        <Skeleton className="leading-none mb-2 w-44">
          <Text size="1" className="invisible">
            xxxx
          </Text>
        </Skeleton>
        <Card
          as="div"
          rounded="lg"
          className="relative overflow-hidden animate-pulse"
        >
          <Skeleton className="aspect-video" />
        </Card>
        <Skeleton className="mt-1 w-24">
          <Text size="1" className="invisible">
            xxxx
          </Text>
        </Skeleton>
      </div>
    </div>
  );
};
