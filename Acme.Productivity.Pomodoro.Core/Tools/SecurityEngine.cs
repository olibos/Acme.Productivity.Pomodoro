// <copyright file="SecurityEngine.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Core.Tools
{
    using System;
    using System.Linq;
    using System.Security.Cryptography;

    using Isopoh.Cryptography.Argon2;

    /// <summary>
    /// All security checks.
    /// </summary>
    public static class SecurityEngine
    {
        /// <summary>
        /// Generate a cryptographically secure guid.
        /// </summary>
        /// <returns>The generated guid.</returns>
        public static Guid GenerateId()
        {
            using var provider = new RNGCryptoServiceProvider();
            var bytes = new byte[16];
            provider.GetBytes(bytes);
            return new Guid(bytes);
        }

        /// <summary>
        /// Hash a password with the right security parameters.
        /// </summary>
        /// <param name="password">The password to be hashed.</param>
        /// <returns>The hashed data.</returns>
        public static string HashPassword(string password)
        {
            return password == null ? null : Argon2.Hash(password);
        }

        /// <summary>
        /// Verify if the password is a hash.
        /// </summary>
        /// <param name="password">The password to be verified.</param>
        /// <param name="hash">The hash against wich vto verify.</param>
        /// <returns>True if the password is valid.</returns>
        public static bool VerifyPassword(string password, string hash)
        {
            if (password == null || hash == null)
            {
                return false;
            }

            return Argon2.Verify(hash, password);
        }
    }
}