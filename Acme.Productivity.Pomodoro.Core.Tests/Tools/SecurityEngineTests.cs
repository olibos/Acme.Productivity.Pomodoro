// <copyright file="SecurityEngineTests.cs" company="Acme">
// Copyright (c) Acme. All rights reserved.
// </copyright>

namespace Acme.Productivity.Pomodoro.Core.Tests.Tools
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    using Acme.Productivity.Pomodoro.Core.Tools;

    using Xunit;

    /// <summary>
    /// Test the security engine.
    /// </summary>
    public class SecurityEngineTests
    {
        /// <summary>
        /// Generate and validate an id.
        /// </summary>
        /// <param name="iterations">Number of guid to generate.</param>
        [Theory]
        [InlineData(5)]
        [InlineData(10)]
        public void GenerateId(int iterations)
        {
            var guids = new List<Guid>();

            for (var i = 0; i < iterations; i++)
            {
                guids.Add(SecurityEngine.GenerateId());
            }

            Assert.True(guids.Distinct().Count() == guids.Count);
        }

        /// <summary>
        /// Validate hash thate are not ok.
        /// </summary>
        /// <param name="password">The password to hash.</param>
        [Theory]
        [InlineData("This is Spartaaaa")]
        [InlineData("Hello World !")]
        [InlineData(null)]
        public void HashPasswordKo(string password)
        {
            var hashedWrong = SecurityEngine.HashPassword("42");
            Assert.False(SecurityEngine.VerifyPassword(password, hashedWrong));
        }

        /// <summary>
        /// Validate hash thate are ok.
        /// </summary>
        /// <param name="password">The password to hash.</param>
        [Theory]
        [InlineData("This is Spartaaaa")]
        [InlineData("Hello World !")]
        [InlineData("password")]
        public void HashPasswordOk(string password)
        {
            var hashed = SecurityEngine.HashPassword(password);
            Assert.True(SecurityEngine.VerifyPassword(password, hashed));
        }
    }
}