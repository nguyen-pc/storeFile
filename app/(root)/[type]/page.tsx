import Card from "@/components/Card";
import Sort from "@/components/Sort";
import { getFile } from "@/lib/actions/file.actions";
import { SearchParamProps } from "@/types";
import { Models } from "node-appwrite";
import React from "react";

const Page = async ({ params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";

  const files = await getFile();
  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>

        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h5">0 MB</span>
          </p>

          <div className="sort-container">
            <p className="body-1 hidden sm:block text-light-200">Sort by: </p>
            <Sort />
          </div>
        </div>
      </section>

      {/* render the files */}

      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploader </p>
      )}
    </div>
  );
};

export default Page;
