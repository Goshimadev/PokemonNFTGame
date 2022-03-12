import { expect } from 'chai'
import { Signer } from 'ethers'
import { ethers } from 'hardhat'
import { before } from 'mocha'
import { PokemonGame } from '../typechain'
import { getPokemonData } from "../scripts/getPokeApiData"
import { pokemons } from "../data/pokemon"

describe('PokemonGame - Battle', function () {
  let gameContract: PokemonGame
  let deployer: Signer
  let bossIds: number[]
  let bossLevels: number[]
  let pokemomSelected = 0;
  let mewtwoId = 150;
  before(async function () {
    // const limit = 150
    // const pokemonList = await getPokemonData(limit)
    const pokemonList = pokemons

    bossIds = [mewtwoId]
    bossLevels = [10]

    // We get the contract to deploy
    const gameContractFactory = await ethers.getContractFactory('PokemonGame')
    deployer = gameContractFactory.signer
    gameContract = await gameContractFactory.deploy(
      pokemonList.characterIndexes,
      pokemonList.characterNames,
      pokemonList.characterImageURIs,
      pokemonList.characterHp,
      pokemonList.characterAttack,
      bossIds,
      bossLevels
    )

    await gameContract.deployed()
    console.log('Pokemon deployed to:', gameContract.address)

    const pokemonId = 4
    await gameContract.mint(pokemonId)

    await gameContract.attackBoss(pokemomSelected, mewtwoId)
  })

  it("Should sub health to boss", async function () {
    const addressDeployer = await deployer.getAddress()

    const bossRaw = await gameContract.getBoss(mewtwoId)
    const boss = await gameContract.getPokemonReadable(bossRaw)

    const player = await gameContract.getPokemonSelected(addressDeployer, pokemomSelected)

    expect(boss.stats.hp.toNumber()).to.lessThan(boss.stats.maxHp.toNumber());
  })

  it("Should up level of pokemon", async function () {
    const addressDeployer = await deployer.getAddress()

    const pokemonRaw = await gameContract.getPokemonByIndexOf(pokemomSelected, addressDeployer)
    const pokemon = await gameContract.getPokemonReadable(pokemonRaw)
    console.log(pokemon.info.id, pokemon.info.name);
    expect(pokemon.level.toNumber()).to.equal(5);
  })
})