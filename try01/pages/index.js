import Head from 'next/head';
import Image from 'next/image';
import Script from 'next/script';
import React from 'react';

import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>SMPEP</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="container-fluid">
        <div className="container-fluid">
          <ul className="nav nav-tabs navtop">
            <li className="linkInativo">
              <Link className="nav-link linkInativo" href="/cadastro">
                Cadastro
              </Link>
            </li>
            <li className="linkInativo">
              <Link className="nav-link linkInativo" href="/pesquisa">
                Pesquisa
              </Link>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">
        <p>footer</p>
      </footer>
    </div>
  );
}
