import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      
      <header className="flex flex-col md:flex-row items-center justify-between bg-gray-800 text-white p-6 rounded-lg mb-12 shadow-lg">
        <img
          src="/img/charizard_base_set.png"
          alt="Charizard Base Set"
          className="w-40 h-40 object-cover rounded-full mb-4 md:mb-0"
        />
        <div className="text-center md:text-left md:ml-8">
          <h1 className="text-4xl font-bold leading-tight text-gray-100">Bem-vindo à PokéTCG Store!</h1>
          <p className="text-lg mt-4 max-w-lg mx-auto md:mx-0 text-gray-300">Encontre as mais raras cartas Pokémon pelo melhor preço do mercado, com entrega rápida e segura.</p>
        </div>
      </header>

      <section className="text-center mb-12">
        <h2 className="text-3xl font-semibold mb-8 text-gray-100">Coleções em Destaque</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <img
              src="/img/lost_origin_cover.jpg"
              alt="Lost Origin Cover"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-100">Origem Perdida</h3>
            <p className="text-gray-400 mt-2">Origem Perdida! Uma coleção que traz o retorno da mecânica de Zona Perdida, e a continuação da tão aclamada Galeria de Treinadores.</p>
            <Link
              to="/lost-origin"
              className="mt-4 inline-block px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
            >
              Ver Coleção
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <img
              src="/img/chilling_reign_cover.png"
              alt="Chilling Reign Cover"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-100">Reinado Arrepiante</h3>
            <p className="text-gray-400 mt-2">Reine sobre a tundra congelada! Treinadores, já deixem o seu Crown Pass em mãos, pois o trem para a Crown Tundra está partindo!</p>
            <Link
              to="/chilling-reign"
              className="mt-4 inline-block px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
            >
              Ver Coleção
            </Link>
          </div>

          <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition transform hover:scale-105">
            <img
              src="/img/fusion_strike_cover.png"
              alt="Fusion Strike Cover"
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-100">Golpe Fusão</h3>
            <p className="text-gray-400 mt-2">Chegou a nova coleção do Pokémon Estampas Ilustradas, Golpe Fusão! Estilos de batalha se reúnem em uma nova estratégia, que está movimentando bastante todo o cenário competitivo Pokémon.</p>
            <Link
              to="/fusion-strike"
              className="mt-4 inline-block px-6 py-2 bg-gray-700 text-white font-semibold rounded-lg hover:bg-gray-600 transition"
            >
              Ver Coleção
            </Link>
          </div>

        </div>
      </section>

      <footer className="text-center bg-gray-900 text-white py-6 rounded-lg mt-12 shadow-lg">
        <p className="text-sm">&copy; 2024 PokéTCG. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Home;